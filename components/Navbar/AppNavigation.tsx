import React, { useMemo } from "react";
import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Drawer,
  ScrollArea,
  rem,
  ActionIcon,
  Container,
  Avatar,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

import { HiMenuAlt4 } from "react-icons/hi";
import { TbBrandMantine, TbDashboard, TbLogout } from "react-icons/tb";

import { TbHome } from "react-icons/tb";
import NavbarLinksGroup from "./NavbarLinksGroup";

import UserAvatarMenu from "../Other/UserAvatarMenu";
import ColorSchemaButton from "../Other/ColorSchemaButton";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const Links = [
  {
    label: "Home",
    icon: TbHome,
    url: "/",
  },
  {
    label: "Dashboard",
    icon: TbDashboard,
    url: "/dashboard",
  },
];
export default function AppNavigation() {
  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { classes, theme } = useStyles();

  const LinksMemo = useMemo(() => {
    return Links;
  }, []);

  return (
    <Box>
      <Header height={60} sx={{ position: "fixed" }}>
        <Container size={"xl"} sx={{ height: "100%" }}>
          <Group position="apart" sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ActionIcon
                onClick={toggleDrawer}
                variant="light"
                className={classes.hiddenDesktop}
                size={"lg"}
              >
                <HiMenuAlt4 size="1.2rem" />
              </ActionIcon>
              <Link
                href={"/"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <TbBrandMantine size={42} color={theme.fn.primaryColor()} />
              </Link>
            </Box>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
              }}
              className={classes.hiddenMobile}
            >
              {LinksMemo.map((item, i) => {
                return (
                  <Link href={item.url} key={i} className={classes.link}>
                    {item.label}
                  </Link>
                );
              })}
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ColorSchemaButton />

              <Group>
                <UserAvatarMenu />
              </Group>
            </Box>
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding="md"
        title=" "
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(70)})`} mx="-md">
          <Divider
            mb={"xs"}
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <NavbarLinksGroup links={LinksMemo} setOpened={toggleDrawer} />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
