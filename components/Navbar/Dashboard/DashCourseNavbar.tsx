import { Button, Navbar, ScrollArea, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import {
  TbCalendarStats,
  TbHome,
  TbLayout,
  TbLayoutDashboard,
  TbPlayerPlayFilled,
  TbShoppingBag,
  TbVideo,
} from "react-icons/tb";
import DashVideoLinksGroup from "@/src/Page/Dashboard/DashVideoLinksGroup";

type Props = {
  opened: boolean;
  setOpened: any;
};

const Links = [
  //   {
  //     label: "Dashboard",
  //     icon: TbLayoutDashboard,
  //     url: "/dashboard",
  //   },
  {
    label: "Kirish",
    icon: TbShoppingBag,
    url: "/dashboard/course/js",
  },
  {
    label: "1-dars",
    icon: TbPlayerPlayFilled,
    initiallyOpened: true,
    links: [
      { label: "Dars", link: "/dashboard/course/js/1dars" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "2-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "3-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "4-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
];

const DashCourseNavbar = ({ opened, setOpened }: Props) => {
  const LinksMemo = useMemo(() => {
    return Links;
  }, []);
  return (
    <div>
      <Navbar
        p="xs"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 250, lg: 280 }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <ScrollArea>
          <DashVideoLinksGroup links={LinksMemo} setOpened={setOpened} />
        </ScrollArea>
      </Navbar>
    </div>
  );
};

export default DashCourseNavbar;
