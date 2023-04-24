import React from "react";
import { Box, Text, createStyles, rem } from "@mantine/core";

type Props = {};

export const useHomeTitleStyle = createStyles((theme) => ({
  title: {
    fontSize: rem(40),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.dark[4],
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export const useDashTitleStyle = createStyles((theme) => ({
  title: {
    fontSize: rem(24),
    fontWeight: 600,
    textTransform: "capitalize",
    minWidth: "50%",

    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[7],
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    borderRadius: theme.radius["xs"],
    display: "inline-block",
    padding: "10px 100px  10px 10px",
    borderLeft: `5px solid ${theme.colors.blue[3]}`,
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(20),
      width: "100%",
    },
  },
}));
