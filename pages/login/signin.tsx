/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
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
  Center,
  PinInput,
} from "@mantine/core";
// import { notifications } from "@mantine/notifications";
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import Link from "next/link";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useTransition } from "react";

const signin = () => {
  const [segment, setSegment] = useState("pochta");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
    startTransition(() => {
      try {
        axios
          .post("https://onlineedu.pythonanywhere.com/student/login/", {
            email: values.email,
            password: values.password,
          })
          .then(function (response) {
            if (response.status === 200) {
              signIn("credentials", {
                email: response?.data?.user_profile_data?.email,
                name: response?.data?.user_profile_data?.first_name,
                token: response?.data.token?.access,
                redirect: false,
              }).then((res) => {
                res?.status === 200 ? router.push("/dashboard") : null;
              });

              notifications.show({
                title: "Assalomu Alaykom",
                message: "Shaxsiy saxifangizga hush kelibsiz.",
                icon: <TbUser />,
              });
            }
          })
          .catch(function (error) {
            
              formPochta.setFieldError("email", "Noto'gri Email");
              formPochta.setFieldError("password", "Noto'gri password");
            
          });
      } catch (err) {}
    });
  };

  return (
    <Container size={480} p={"0"}>
      <Paper withBorder shadow="md" p={30} radius="md">
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
                />
                <PasswordInput
                  mt="md"
                  label="Parol"
                  placeholder="Prol"
                  {...formPochta.getInputProps("password")}
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
                  <Button type="submit" fullWidth mt="xl" loading={isPending}>
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
