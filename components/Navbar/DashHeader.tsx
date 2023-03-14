import {
  Header,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
  Box,
  ActionIcon,
  useMantineColorScheme,
  Avatar,
} from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbBrandMantine } from "react-icons/tb";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";

import Link from "next/link";

interface DashType {
  opened: any;
  setOpened?: any;
}
const DashHeader = ({ opened, setOpened }: DashType) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { toggle, fullscreen } = useFullscreen();

  return (
    <>
      <Header height={{ base: 50, md: 60 }} p="md">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o: any) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="sm"
              />
            </MediaQuery>
            <Link href={"/"} style={{ marginTop: "5px" }}>
              <TbBrandMantine
                size={"2.4rem"}
                color={`${theme.colorScheme === "light" ? "blue" : "yellow"}`}
              />
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <ActionIcon
              variant="light"
              onClick={() => toggleColorScheme()}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
              size={'lg'}
            >
              {colorScheme !== "dark" ? (
                <MdOutlineDarkMode size="1.2rem" />
              ) : (
                <MdOutlineLightMode size="1.2rem" />
              )}
            </ActionIcon>
            <ActionIcon
              variant="light"
              onClick={() => toggle()}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
              size={'lg'}
            >
              {!fullscreen ? (
                <RxEnterFullScreen size="1.2rem" />
              ) : (
                <RxExitFullScreen size="1.2rem" />
              )}
            </ActionIcon>
            <Avatar
              color={`${theme.colorScheme === "light" ? "blue" : "yellow"}`}
            />
          </Box>
        </Box>
      </Header>
    </>
  );
};

export default DashHeader;
