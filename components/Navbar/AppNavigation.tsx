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
  Text,
  Menu,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

import { HiMenuAlt4 } from "react-icons/hi";
import {
  TbBrandMantine,
  TbLayoutDashboard,
  TbListDetails,
  TbPlayerPlayFilled,
  TbUser,
  TbChevronDown,
  TbCategory2,
} from "react-icons/tb";

import { TbHome } from "react-icons/tb";
import NavbarLinksGroup from "./NavbarLinksGroup";

import UserAvatarMenu from "../Other/UserAvatarMenu";
import ColorSchemaButton from "../Other/ColorSchemaButton";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { DashLinkData, AppLinkData } from "@/data/NavLinkData";

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

export default function AppNavigation() {
  const router = useRouter();
  const { classes: BgClass } = useCardBg();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const DashLink: {
    label: string;
    url: string;
    icon: any;
  }[] = DashLinkData();

  const AppLink: {
    label: string;
    url: string;
    icon: any;
  }[] = AppLinkData();

  return (
    <Box>
      <Header height={50} sx={{ position: "fixed" }} className={BgClass.cardBg}>
        <Container size={"xl"} sx={{ height: "100%" }}>
          <Group position="apart" sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ActionIcon
                onClick={toggleDrawer}
                variant="light"
                className={classes.hiddenDesktop}
                size={"md"}
              >
                <HiMenuAlt4 size="1.1rem" />
              </ActionIcon>
              <Link
                href={"/"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <TbBrandMantine size={36} color={theme.fn.primaryColor()} />
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
              {AppLink.map((item, i) => {
                return (
                  <Link href={item.url} key={i} className={classes.link}>
                    {item.label}
                  </Link>
                );
              })}
              <Menu withArrow trigger="hover" shadow="md" width={200}>
                <Menu.Target>
                  <NavLink
                    label="Menu"
                    rightSection={<TbChevronDown size="1rem" />}
                    className={classes.link}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Foydalanuvchi sahifasi</Menu.Label>
                  {DashLink.map((item, i) => {
                    return (
                      <Link href={item.url} key={i}>
                        <Menu.Item icon={<item.icon size={14} />}>
                          {item.label}
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
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
            
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Box>
            {AppLink.map((item, i) => {
              return (
                <Link href={item.url} key={i}>
                  <NavLink
                    icon={<item.icon size="18" />}
                    label={`${item.label}`}
                    active={router.route === item.url}
                    py={"md"}
                  />
                </Link>
              );
            })}
            <Divider
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />
            <NavLink
              label="Menu"
              childrenOffset={28}
              defaultOpened
              icon={<TbCategory2 />}
              py={"md"}
            >
              {DashLink.map((item, i) => {
                return (
                  <Link href={item.url} key={i}>
                    <NavLink
                      icon={<item.icon size="18" />}
                      label={`${item.label}`}
                      active={router.route === item.url}
                      py={"sm"}
                    />
                  </Link>
                );
              })}
            </NavLink>
          </Box>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
