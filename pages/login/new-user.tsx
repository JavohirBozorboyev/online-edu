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
  Box,
  Center,
  SegmentedControl,
  Grid,
  Text,
  Divider,
  PinInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import Link from "next/link";
import { GoogleButton, AppleButton } from "@/src/Page/Login/SocilaButtons";

const index = () => {
  const [segment, setSegment] = useState("pochta");

  const router = useRouter();

  const name = useRef<any>("");
  const lastName = useRef<any>("");
  const email = useRef<any>("");
  const password = useRef<any>("");
  const tel = useRef<any>("");
  const cmsKey = useRef<any>("");

  const handleAuth = async () => {
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
  };

  return (
    <Container size={620}>
      <Paper withBorder shadow="md" p={30} radius="md">
        <Box mb={"md"}>
          <Text size="xl" weight={700} tt={"uppercase"} ta={"center"}>
            {"Ro'yhatdan O'tish"}
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

        <Box mt={"md"}>
          <Grid>
            <Grid.Col span={12} xs={6}>
              <TextInput ref={name} label="Ism" placeholder="Ism" required />
            </Grid.Col>
            <Grid.Col span={12} xs={6}>
              <TextInput
                ref={lastName}
                label="Familiya"
                placeholder="Familiya"
                required
              />
            </Grid.Col>
          </Grid>
          <Box>
            {segment === "pochta" ? (
              <>
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
                <PinInput mt={"md"} ref={cmsKey} />
              </>
            )}
          </Box>
        </Box>
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
