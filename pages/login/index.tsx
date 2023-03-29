/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef } from "react";
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

const index = () => {
  const router = useRouter();

  const username = useRef<any>("");
  const password = useRef<any>("");

  const handleAuth = async () => {
    signIn("credentials", {
      username: username.current.value,
      password: password.current.value,
      tel: "23456",
      redirect: false,
    })
      .then((res: any) => {
        if (res.ok) {
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        null;
      });
  };

  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          ref={username}
          label="Email"
          placeholder="you@mantine.dev"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          ref={password}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={handleAuth} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default index;
