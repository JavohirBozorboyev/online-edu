import { Button, Navbar, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import { DashLinkData } from "@/data/NavLinkData";
import {
  TbLayoutDashboard,
  TbListDetails,
  TbPlayerPlayFilled,
  TbUser,
  TbVideo,
} from "react-icons/tb";

type Props = {
  opened: boolean;
  setOpened: any;
};

const DashNavbar = ({ opened, setOpened }: Props) => {
  const DashLink = DashLinkData();
  return (
    <div>
      <Navbar
        p="0"
        hiddenBreakpoint="sm"
        hidden={!opened}
        withBorder={true}
        width={{ sm: 70 }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <NavbarLinksGroup links={DashLink} setOpened={setOpened} />
      </Navbar>
    </div>
  );
};

export default DashNavbar;
