import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  ActionIcon,
} from "@mantine/core";

import Link from "next/link";
import React from "react";

import { TbBrandMantine, TbLogout } from "react-icons/tb";

import UserAvatarMenu from "@/components/Other/UserAvatarMenu";
import ColorSchemaButton from "@/components/Other/ColorSchemaButton";
import FullScreenButton from "@/components/Other/FullScreenButton";

type Props = {
  opened: boolean;
  setOpened?: any;
};

const DashNavigation = ({ opened, setOpened }: Props) => {
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
        // withBorder={false}
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
              <ActionIcon variant="light" mr={"xs"} size={"lg"} component="div">
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o: boolean) => !o)}
                  size="16px"
                  color={theme.colors.gray[6]}
                />
              </ActionIcon>
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
