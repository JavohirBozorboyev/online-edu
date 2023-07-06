import { Box, Tabs, createStyles } from "@mantine/core";
import {
  IconHome,
  IconLayoutDashboard,
  IconPlayerPlayFilled,
  IconListDetails,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
    icon: IconHome,
    url: "/",
  },
  {
    label: "Kurslar",
    icon: IconPlayerPlayFilled,
    url: "/course",
  },

  {
    label: "Imtixon",
    icon: IconListDetails,
    url: "/quiz",
  },
  {
    label: "Dashboard",
    icon: IconLayoutDashboard,
    url: "/dashboard",
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
