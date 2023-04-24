import { Box, Tabs, createStyles, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TbHome,
  TbHome2,
  TbLayoutDashboard,
  TbListDetails,
  TbPlayerPlayFilled,
  TbShoppingBag,
  TbVideo,
} from "react-icons/tb";

const Links = [
  {
    label: "Dars",
    icon: TbPlayerPlayFilled,
    url: "/dashboard/course/js/1dars",
  },
  {
    label: "Topshiriq",
    icon: TbLayoutDashboard,
    url: "/dashboard/course/js/1dars-topshiriq",
  },
  {
    label: "Imtixon",
    icon: TbListDetails,
    url: "/dashboard/course/js/1dars-imtixon",
  },
];

type Props = {};

const LessonTabs = (props: Props) => {
  const router = useRouter();
  const theme = useMantineTheme();

  return (
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
        width: "100%",
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
                  size="1rem"
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
            >
              {item.label}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
    </Tabs>
  );
};

export default LessonTabs;
