import { Button, Navbar, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import {
  TbLayoutDashboard,
  TbListDetails,
  TbUser,
  TbVideo,
} from "react-icons/tb";

type Props = {
  opened: boolean;
  setOpened: any;
};

const Links = [
  {
    label: "Asosiy",
    icon: TbLayoutDashboard,
    url: "/dashboard",
  },
  {
    label: "Kurslar",
    icon: TbVideo,
    url: "/dashboard/course",
  },
  {
    label: "Imtxon",
    icon: TbListDetails,
    url: "/dashboard/quiz",
  },
  {
    label: "Account",
    icon: TbUser,
    url: "/dashboard/account",
  },
];

const DashNavbar = ({ opened, setOpened }: Props) => {
  const LinksMemo = useMemo(() => {
    return Links;
  }, []);
  return (
    <div>
      <Navbar
        p="0"
        hiddenBreakpoint="sm"
        hidden={!opened}
        withBorder={true}
        width={{ sm: 80 }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <NavbarLinksGroup links={LinksMemo} setOpened={setOpened} />
      </Navbar>
    </div>
  );
};

export default DashNavbar;
