import { Box, Tabs, createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TbLayoutDashboard, TbShoppingBag } from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
const Links = [
  {
    label: "Dashboard",
    icon: TbLayoutDashboard,
    url: "/dashboard",
  },
  {
    label: "My Course",
    icon: TbShoppingBag,
    url: "/dashboard/course",
  },
];

type Props = {};

const DashTabs = (props: Props) => {
  const router = useRouter();
  const { classes, theme } = useStyles();
  return (
    <Box className={classes.hiddenDesktop}>
      <Tabs
        value={router.route as string}
        onTabChange={(value) => router.push(`${value}`)}
        m={"-md"}
        mb={"lg"}
        radius={0}
        color="yellow"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          borderRadius: "4px",
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
                    size="1.5rem"
                    color={`${
                      router.route === item.url
                        ? theme.colorScheme === "dark"
                          ? theme.colors.yellow[2]
                          : theme.colors.yellow[5]
                        : theme.colorScheme === "dark"
                        ? theme.colors.blue[2]
                        : theme.colors.blue[5]
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

export default DashTabs;
