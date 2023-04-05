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
  SegmentedControl,
  Box,
  Center,
  Text,
  Divider,
  PinInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { TbUser, TbEye, TbMail, TbPhone } from "react-icons/tb";
import Link from "next/link";
import { AppleButton, GoogleButton } from "@/src/Page/Login/SocilaButtons";

const signin = () => {
  const [segment, setSegment] = useState("pochta");
  const router = useRouter();

  const email = useRef<any>("");
  const password = useRef<any>("");
  const tel = useRef<any>("");
  const cmsKey = useRef<any>("");

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
    <Container size={480}>
      <Paper withBorder shadow="md" p={30} radius="md">
        <Box mb={"md"}>
          <Text size="xl" weight={700} tt={"uppercase"} ta={"center"}>
            Tizimga Kirish
          </Text>
          <Group grow mb="md" mt="lg">
            <Box>
              <GoogleButton />
            </Box>
            <Box>
              <AppleButton />
            </Box>
          </Group>

          <Divider
            label="Or continue with email and Phone Number"
            labelPosition="center"
            my="lg"
          />
        </Box>
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
            },
          ]}
        />
        <Box>
          {segment === "pochta" ? (
            <>
              <TextInput
                ref={email}
                label="Pochta"
                placeholder="abs@gmail.com"
                required
                mt="md"
                type="email"
              />
              <PasswordInput
                label="Parol"
                placeholder="Parol"
                required
                mt="md"
                ref={password}
              />
            </>
          ) : (
            <>
              <TextInput
                ref={tel}
                label="Mobil Raqam"
                placeholder="+998 99 391 25 05"
                required
                mt="md"
              />
              <PinInput mt={'md'} ref={cmsKey} />
            </>
          )}
        </Box>
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Link href={"/login/new-user"}>
            <Anchor component="button" size="sm">
              {" Ro'yhatdan O'tish"}
            </Anchor>
          </Link>
        </Group>
        <Button onClick={handleAuth} fullWidth mt="xl">
          Tizimga Kirish
        </Button>
      </Paper>
    </Container>
  );
};

export default signin;
