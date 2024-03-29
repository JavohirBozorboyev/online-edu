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

import UserAvatarMenu from "@/components/Other/UserAvatarMenu";
import ColorSchemaButton from "@/components/Other/ColorSchemaButton";
import FullScreenButton from "@/components/Other/FullScreenButton";
import { IconBrandMantine } from "@tabler/icons-react";

type Props = {
  opened: boolean;
  setOpened?: any;
};

const DashNavigation = ({ opened, setOpened }: Props) => {
  const theme = useMantineTheme();

  return (
    <>
      <Header
        height={{ base: 50 }}
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
              <ActionIcon variant="light" mr={"xs"} size={"md"} component="div">
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o: boolean) => !o)}
                  size="xs"
                  color={theme.colors.gray[6]}
                />
              </ActionIcon>
            </MediaQuery>
            <Link href={"/"} style={{ marginTop: "5px" }}>
              <IconBrandMantine size={36} color={theme.fn.primaryColor()} />
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
