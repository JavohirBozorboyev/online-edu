import { Box, NavLink, Navbar, Text } from "@mantine/core";
import React from "react";
import DashNavLinksGroup from "./DashNavLinksGroup";
import {
  TbCalendarStats,
  TbHome,
  TbSettings,
} from "react-icons/tb";

interface DashNavType {
  opened?: boolean;
}

const mockdata = [
  {
    label: "Home",
    icon: TbHome,
    url: "/",
  },
  {
    label: "Releases",
    icon: TbCalendarStats,
    initiallyOpened: true,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/dashboard" },
      { label: "Releases schedule", link: "/" },
    ],
  },

  {
    label: "Settings",
    icon: TbSettings,
    url: "/setting",
  },
];

const DashNavbar = ({ opened }: DashNavType) => {
  return (
    <div>
      <Navbar
        p="xs"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 250, lg: 300 }}
      >
        <DashNavLinksGroup links={mockdata} />
      </Navbar>
    </div>
  );
};

export default DashNavbar;
