/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useCallback, useTransition } from "react";
import { useRouter } from "next/router";
import {
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Anchor,
  Button,
  Container,
  Box,
  Center,
  SegmentedControl,
  Grid,
  Input,
  LoadingOverlay,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

import Link from "next/link";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { IconUser, IconMail, IconPhone } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

const index = () => {
  const [segment, setSegment] = useState("pochta");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const id = useId();

  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  const formPochta = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) => (value.length < 2 ? "Ismingizda xato bor." : null),
      lastName: (value) =>
        value.length < 2 ? "Familiyangizni to'liq kiriting" : null,
      tel: (value) => (value.length < 6 ? "Telefon raqamni kiriting." : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Noto'gri pochta manzili",
      password: (value) =>
        value.length < 6 ? "Parol 6 ta belgidan kam." : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Parollar mos kelmadi." : null,
    },
  });

  const handleAuth = useCallback(async (value: any) => {
    const PostData = {
      first_name: value.firstName,
      last_name: value.lastName,
      email: value.email,
      phone: value.tel,
      password: value.password,
      password2: value.confirmPassword,
    };
    startTransition(() => {
      axios
        .post(`${process.env.NEXT_PUBLIC_URL_BACE}/student/register/`, PostData)
        .then(function (res) {
          if (res.status === 201) {
            signIn("credentials", {
              email: value.email,
              password: value.password,
              redirect: false,
            })
              .then((res) => {
                if (res?.status === 200) {
                  router.push("/dashboard");
                }
              })
              .catch(function (error) {
                formPochta.setFieldError("email", "Noto'gri Email");
                formPochta.setFieldError("password", "Noto'gri password");
              });
          }
        })
        .catch(function (error) {
          let errorValidate = error.response?.data?.errors;
          if (error.response.status === 400) {
            errorValidate?.email
              ? formPochta.setFieldError("email", `Pochta manzili noto'g'ri`)
              : null;
          }
        });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container size={620} p={0}>
        <Paper withBorder shadow="md" p={30} radius="md">
          <SegmentedControl
            value={segment}
            onChange={setSegment}
            w={"100%"}
            data={[
              {
                label: (
                  <Center>
                    <IconMail size="1rem" />
                    <Box ml={10}>Pochta</Box>
                  </Center>
                ),
                value: "pochta",
              },
              {
                label: (
                  <Center>
                    <IconPhone size="1rem" />
                    <Box ml={10}>Mobil Raqam</Box>
                  </Center>
                ),
                value: "tel",
                disabled: true,
              },
            ]}
          />

          <Box mt={"md"}>
            <Box>
              {segment === "pochta" ? (
                <form
                  onSubmit={formPochta.onSubmit((values) => handleAuth(values))}
                >
                  <Grid>
                    <Grid.Col span={12} xs={6}>
                      <TextInput
                        label="Ism"
                        placeholder="Ism"
                        {...formPochta.getInputProps("firstName")}
                      />
                    </Grid.Col>
                    <Grid.Col span={12} xs={6}>
                      <TextInput
                        label="Familiya"
                        placeholder="Familiya"
                        {...formPochta.getInputProps("lastName")}
                      />
                    </Grid.Col>
                  </Grid>
                  <Input.Wrapper mt="md" id={id} label="Telefon raqam">
                    <Input<any>
                      component={IMaskInput}
                      mask="+998 (90) 000-00-00"
                      id={id}
                      placeholder="+998 (99) 391-25-05"
                      {...formPochta.getInputProps("tel")}
                    />
                  </Input.Wrapper>
                  <TextInput
                    label="Pochta"
                    placeholder="abs@gmail.com"
                    mt="md"
                    {...formPochta.getInputProps("email")}
                  />
                  <Grid mt="xs">
                    <Grid.Col span={12} xs={6}>
                      <PasswordInput
                        label="Parolmi kiriting."
                        placeholder="Parol kiriting"
                        {...formPochta.getInputProps("password")}
                      />
                    </Grid.Col>
                    <Grid.Col span={12} xs={6}>
                      <PasswordInput
                        label="Parolni takrorlang."
                        placeholder="Parolni takrorlang."
                        {...formPochta.getInputProps("confirmPassword")}
                      />
                    </Grid.Col>
                  </Grid>
                  <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" />
                    <Link href={"/login/signin"}>
                      <Anchor component="button" size="sm">
                        Tizimga Kirish
                      </Anchor>
                    </Link>
                  </Group>
                  <Button type="submit" fullWidth mt="xl">
                    {isPending ? "Loading..." : "Ro'yhatdan O'tish"}
                  </Button>
                </form>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default index;
