import React, { useState, memo } from "react";
import {
  Group,
  Box,
  Text,
  UnstyledButton,
  createStyles,
  rem,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.black,
    fontSize: theme.fontSizes.sm,
    transition: "all 0.6s ease",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    overflowX: "hidden",
  },

  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: `${
      useMediaQuery("(min-width: 768px)") ? "center" : "flex-start"
    }`,
    justifyContent: "center",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  url?: string;

  setOpenedNav?: any;
}

export function LinksGroup({
  icon: Icon,
  label,
  url,
  setOpenedNav,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();

  const router = useRouter();

  return (
    <>
      <UnstyledButton className={classes.control}>
        <Link href={`${url}`} onClick={() => setOpenedNav(false)}>
          <Group position="apart" spacing={0}>
            <Box className={classes.link}>
              <ActionIcon
                component="div"
                variant={"light"}
                color={`${router.route === url ? "blue" : "gray"}`}
                size={40}
              >
                <Icon size="1.2rem" />
              </ActionIcon>
              <Text
                ta={"center"}
                fz={"12px"}
                mt="xs"
                lts={"0.8px"}
                color={`${
                  router.route === url
                    ? theme.colorScheme === "dark"
                      ? theme.colors.blue[3]
                      : theme.colors.blue[5]
                    : theme.colorScheme === "dark"
                    ? theme.colors.gray[4]
                    : theme.colors.gray[6]
                }`}
              >
                {label}
              </Text>
            </Box>
          </Group>
        </Link>
      </UnstyledButton>
    </>
  );
}

interface NavType {
  links: any;
  setOpened?: any;
}

const NavbarLinksGroup = ({ links, setOpened }: NavType) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      {links?.map(
        (item: JSX.IntrinsicAttributes & LinksGroupProps, i: number) => {
          return <LinksGroup key={i} {...item} setOpenedNav={setOpened} />;
        }
      )}
    </Box>
  );
};

export default memo(NavbarLinksGroup);
