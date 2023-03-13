import { Box, NavLink, Navbar, Text } from "@mantine/core";
import React from "react";
import DashNavLinksGroup from "./DashNavLinksGroup";

interface DashNavType {
  opened?: boolean;
}

const DashNav = ({ opened }: DashNavType) => {
  return (
    <div>
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 250, lg: 300 }}
      >
        <DashNavLinksGroup />
      </Navbar>
    </div>
  );
};

export default DashNav;
