import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Avatar,
  Menu,
} from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbBrandMantine, TbLogout } from "react-icons/tb";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { signOut } from "next-auth/react";

type Props = {
  opened: boolean;
  setOpened?: any;
};

const DashNavigation = ({ opened, setOpened }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { toggle, fullscreen } = useFullscreen();
  const theme = useMantineTheme();

  return (
    <>
      <Header height={{ base: 60, md: 60 }} p="md">
        <Box
          sx={{
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
                onClick={() => setOpened((o: boolean) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xs"
              />
            </MediaQuery>
            <Link href={"/"} style={{ marginTop: "5px" }}>
              <TbBrandMantine size={42} color={theme.fn.primaryColor()} />
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
              size={"lg"}
            >
              {colorScheme !== "dark" ? (
                <MdOutlineDarkMode size="1.2rem" />
              ) : (
                <MdOutlineLightMode size="1.2rem" />
              )}
            </ActionIcon>
            <ActionIcon
              variant="light"
              onClick={toggle}
              sx={(theme) => ({
                color: theme.colors.blue[6],
              })}
              size={"lg"}
            >
              {!fullscreen ? (
                <BiFullscreen size="1.2rem" />
              ) : (
                <BiExitFullscreen size="1.2rem" />
              )}
            </ActionIcon>
            <Menu
              shadow="md"
              width={200}
              transitionProps={{
                duration: 350,
              }}
            >
              <Menu.Target>
                <Avatar size={"md"} variant="light" color="blue" />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>

                <Menu.Item
                  onClick={() => {
                    signOut();
                  }}
                  color="blue"
                  icon={<TbLogout />}
                >
                  Chiqish
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Box>
      </Header>
    </>
  );
};

export default DashNavigation;
