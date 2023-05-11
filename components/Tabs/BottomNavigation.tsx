import { Box, Tabs, createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TbHome,
  TbLayoutDashboard,
  TbListDetails,
  TbPlayerPlayFilled,
} from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    width: "100%",
    position: "fixed",
    bottom: "0%",
    zIndex: 99,
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
    icon: TbLayoutDashboard,
    url: "/dashboard",
  },
  {
    label: "My Course",
    icon: TbPlayerPlayFilled,
    url: "/dashboard/course",
  },
  {
    label: "My Course",
    icon: TbListDetails,
    url: "/dashboard/quiz",
  },
];

type Props = {};

const BottomNavigation = (props: Props) => {
  const router = useRouter();
  const { classes, theme } = useStyles();
  return (
    <Box className={classes.hiddenDesktop}>
      <Tabs
        value={router.route as string}
        onTabChange={(value) => router.push(`${value}`)}
        // m={"-sx"}
        mb={"0"}
        radius={0}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          borderTop:
            theme.colorScheme === "dark"
              ? `1px solid ${theme.colors.dark[7]}`
              : `1px solid ${theme.colors.gray[1]}`,
        })}
      >
        <Tabs.List grow>
          {Links.map((item, i) => {
            return (
              <Tabs.Tab
                key={i}
                p={"sm"}
                icon={
                  <item.icon
                    size="1.4rem"
                    color={`${
                      router.route === item.url
                        ? theme.colorScheme === "dark"
                          ? theme.colors.blue[5]
                          : theme.colors.blue[5]
                        : theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors.dark[4]
                    }`}
                  />
                }
                value={item.url}
              />
            );
          })}
        </Tabs.List>
      </Tabs>
    </Box>
  );
};

export default BottomNavigation;
