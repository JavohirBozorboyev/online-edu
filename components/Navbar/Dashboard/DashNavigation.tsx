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
import UserAvatarMenu from "@/components/Other/UserAvatarMenu";
import ColorSchemaButton from "@/components/Other/ColorSchemaButton";
import FullScreenButton from "@/components/Other/FullScreenButton";

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
      <Header
        height={{ base: 60, md: 60 }}
        p="md"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
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
            <ColorSchemaButton />
            <FullScreenButton />
            <UserAvatarMenu />
          </Box>
        </Box>
      </Header>
    </>
  );
};

export default DashNavigation;
