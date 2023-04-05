/* eslint-disable react/jsx-key */
import { ScrollArea, Tabs, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useMemo, useEffect, useState } from "react";
import {
  TbCalendarStats,
  TbDashboard,
  TbLayoutDashboard,
  TbPhoto,
  TbShoppingBag,
} from "react-icons/tb";

type Props = {};

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
  //   {
  //     label: "Releases",
  //     icon: TbCalendarStats,
  //     initiallyOpened: true,
  //     links: [
  //       { label: "Upcoming releases", link: "/a" },
  //       { label: "Previous releases", link: "/b" },
  //       { label: "Releases schedule", link: "/c" },
  //     ],
  //   },
];

const DashTabs = (props: Props) => {
  const router = useRouter();
  const [activTab, setActiveTab] = useState(router.route || "");
  const theme = useMantineTheme();
  const LinksMemo = useMemo(() => {
    return Links;
  }, []);

  useEffect(() => {
    setActiveTab(router.route);
    console.log("sa");
  }, [router.route]);
  return (
    <div>
      <Tabs
        defaultValue={activTab}
        color="yellow"
        m={"-md"}
        mb={"lg"}
        radius={"0"}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
        value={router.query.activeTab as string}
        onTabChange={(value) => router.push(`${value}`)}
      >
        <Tabs.List grow>
          {LinksMemo.map((link: any, i: number) => {
            return (
              <Tabs.Tab
                key={i}
                p={"md"}
                value={link.url}
                icon={
                  <link.icon
                    size={"1.2rem"}
                    color={`${
                      router.route === link.url
                        ? theme.colorScheme === "dark"
                          ? theme.colors.yellow[2]
                          : theme.colors.yellow[5]
                        : theme.colorScheme === "dark"
                        ? theme.colors.blue[2]
                        : theme.colors.blue[5]
                    }`}
                  />
                }
              ></Tabs.Tab>
            );
          })}
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default DashTabs;
