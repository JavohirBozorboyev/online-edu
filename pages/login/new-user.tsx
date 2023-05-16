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
  PinInput,
  Input,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import Link from "next/link";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";

const index = () => {
  const [segment, setSegment] = useState("pochta");

  const router = useRouter();
  const id = useId();

  const form = useForm({
    initialValues: {
      name: "",
      lastName: "",
      username: "",
      tel: "",
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },

    validate: {
      name: (value) => (value.length < 2 ? "Ismizni to'liq kiriting" : null),
      lastName: (value) =>
        value.length < 2 ? "Familiyangizni to'liq kiriting" : null,
      username: (value) =>
        value.length < 2 ? "Familiyangizni to'liq kiriting" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Noto'gri pochta manzili",
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleAuth = async (value: any) => {
    console.log(value);
  };

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

          <Box mt={"md"}>
            <Box>
              {segment === "pochta" ? (
                <>
                  <Grid>
                    <Grid.Col span={12} xs={6}>
                      <TextInput label="Ism" placeholder="Ism" required />
                    </Grid.Col>
                  </Grid>
                  <TextInput
                    label="Pochta"
                    placeholder="abs@gmail.com"
                    mt="md"
                    required
                    {...form.getInputProps("email")}
                  />
                  <Input.Wrapper id={id} label="Telefon raqam" required>
                    <Input<any>
                      component={IMaskInput}
                      mask="+998 (90) 000-00-00"
                      id={id}
                      placeholder="Telefon raqam"
                    />
                  </Input.Wrapper>
                </>
              ) : (
                <></>
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
          <Button type="submit" fullWidth mt="xl">
            {"Ro'yhatdan O'tish"}
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default index;
