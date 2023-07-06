import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  ActionIcon,
  Input,
  Button,
  Group,
} from "@mantine/core";

import Link from "next/link";
import React from "react";
import UserAvatarMenu from "@/components/Other/UserAvatarMenu";
import ColorSchemaButton from "@/components/Other/ColorSchemaButton";
import FullScreenButton from "@/components/Other/FullScreenButton";
import {
  IconBrandVercel,
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
  IconSlash,
} from "@tabler/icons-react";
import {
  SpotlightAction,
  SpotlightProvider,
  spotlight,
} from "@mantine/spotlight";

type Props = {
  opened: boolean;
  setOpened?: any;
};

const actions: SpotlightAction[] = [
  {
    title: "Matematika",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
  },
  {
    title: "Fizika",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
  },
  {
    title: "Ingliz-tili",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
  },
  {
    title: "Ona-tili",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
  },
  {
    title: "Kimyo",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
  },
];

const AppNavigation = ({ opened, setOpened }: Props) => {
  const theme = useMantineTheme();

  return (
    <>
      <SpotlightProvider
        actions={actions}
        searchIcon={<IconSearch size="1.2rem" />}
        searchPlaceholder="Search..."
        shortcut="/"
        nothingFoundMessage="Nothing found..."
      >
        <Header
          height={{ base: 60 }}
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
                <ActionIcon
                  variant="light"
                  mr={"xs"}
                  size={"lg"}
                  component="div"
                >
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o: boolean) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                  />
                </ActionIcon>
              </MediaQuery>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Link href={"/"} style={{ marginTop: "5px" }}>
                  <IconBrandVercel size={36} color={theme.fn.primaryColor()} />
                </Link>
              </MediaQuery>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Input
                component="div"
                variant="filled"
                radius={"sm"}
                sx={(theme) => ({
                  width: "180px",
                  div: {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[7]
                        : theme.colors.gray[0],
                    borderRadius: "4px",
                  },
                })}
                icon={<IconSearch size={"1.1rem"} />}
                pointer
                onClick={() => {
                  spotlight.open();
                }}
                rightSection={
                  <ActionIcon
                    sx={(theme) => ({
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[8]
                          : theme.white,
                    })}
                  >
                    <IconSlash size={"1rem"} />
                  </ActionIcon>
                }
              >
                Qidiruv
              </Input>
              <ColorSchemaButton />
              <FullScreenButton />
              <UserAvatarMenu />
            </Box>
          </Box>
        </Header>
      </SpotlightProvider>
    </>
  );
};

export default AppNavigation;
