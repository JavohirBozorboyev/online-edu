/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Anchor,
  Button,
  Container,
  SegmentedControl,
  Box,
  LoadingOverlay,
  Center,
} from "@mantine/core";
// import { notifications } from "@mantine/notifications";
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import Link from "next/link";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";

const signin = () => {
  const [segment, setSegment] = useState("pochta");
  const router = useRouter();
  const [visible, { toggle }] = useDisclosure(false);

  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  const formPochta = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Emailda hato bor!"),
      password: (value) => (value.length > 2 ? null : "Parolda xoto bor!"),
    },
  });

  const handleAuth = async (values: any) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/student/login/`, {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          // toggle();
          setCookie("_token", `${response.data.token.access}`);
          setCookie("_refresh_token", `${response.data.token.refresh}`);
          signIn("credentials", {
            id: response?.data?.user_profile_data?.id,
            email: response?.data?.user_profile_data?.email,
            name: response?.data?.user_profile_data?.first_name,
            token: response?.data.token?.access,

            redirect: false,
          }).then((res) => {
            if (res?.status === 200) {
              router.reload();
              notifications.show({
                title: "Assalomu Alaykom",
                message: "Shaxsiy saxifangizga hush kelibsiz.",
                icon: <TbUser />,
              });
            }
          });
        }
      })
      .catch(function (error) {
        formPochta.setFieldError("email", "Noto'gri Email");
        formPochta.setFieldError("password", "Noto'gri password");
      });
  };

  if (getCookie("_token")) {
    router.push("/dashbaord/course");
  }

  return (
    <Container size={480} p={"0"}>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Paper withBorder shadow="sm" p={30} radius="md">
        <SegmentedControl
          value={segment}
          onChange={setSegment}
          w={"100%"}
          data={[
            {
              label: (
                <Center>
                  <TbMail size="1rem" />
                  <Box ml={10}>Pochta</Box>
                </Center>
              ),
              value: "pochta",
            },
            {
              label: (
                <Center>
                  <TbPhone size="1rem" />
                  <Box ml={10}>Mobil Raqam</Box>
                </Center>
              ),
              value: "tel",
              disabled: true,
            },
          ]}
        />
        <Box>
          {segment === "pochta" ? (
            <Box mt="lg">
              <form
                onSubmit={formPochta.onSubmit((values) => handleAuth(values))}
              >
                <TextInput
                  label="Email"
                  placeholder="Email"
                  {...formPochta.getInputProps("email")}
                  autoComplete="on"
                />
                <PasswordInput
                  mt="md"
                  label="Parol"
                  placeholder="Prol"
                  {...formPochta.getInputProps("password")}
                  autoComplete="on"
                />

                <Group position="apart" mt="lg">
                  <Checkbox
                    label="Remember me"
                    // {...formPochta.getInputProps("termsOfService", {
                    //   type: "checkbox",
                    // })}
                  />
                  <Link href={"/login/new-user"}>
                    <Anchor component="button" size="sm">
                      {" Ro'yhatdan O'tish"}
                    </Anchor>
                  </Link>
                </Group>

                <Group position="right" mt="md">
                  <Button type="submit" fullWidth mt="xl">
                    Tizimga Kirish
                  </Button>
                </Group>
              </form>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default signin;
