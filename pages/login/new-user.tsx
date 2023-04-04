/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef, useCallback } from "react";
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
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { TbUser } from "react-icons/tb";
import Link from "next/link";

const index = () => {
  const router = useRouter();

  const name = useRef<any>("");
  const lastName = useRef<any>("");
  const email = useRef<any>("");
  const password = useRef<any>("");

  const handleAuth = useCallback(async () => {
    signIn("credentials", {
      email: email.current.value,
      password: password.current.value,
      redirect: false,
    })
      .then((res: any) => {
        if (res.ok) {
          notifications.show({
            title: "Assalomu Alaykom",
            message: "Shaxsiy saxifangizga hush kelibsiz.",
            icon: <TbUser />,
          });
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        null;
      });
  }, [router]);

  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput ref={name} label="Ism" placeholder="Ism" required />
        <TextInput
          ref={lastName}
          label="Familiya"
          placeholder="Familiya"
          mt="md"
          required
        />
        <TextInput
          ref={email}
          label="Pochta"
          placeholder="abs@gmail.com"
          mt="md"
          required
        />
        <PasswordInput
          label="Parol"
          placeholder="Your Parol"
          required
          mt="md"
          ref={password}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Link href={"/login/signin"}>
            <Anchor component="button" size="sm">
              Tizimga Kirish
            </Anchor>
          </Link>
        </Group>
        <Button onClick={handleAuth} fullWidth mt="xl">
          {"Ro'yhatdan O'tish"}
        </Button>
      </Paper>
    </Container>
  );
};

export default index;
