import { Button, Navbar, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import {
  TbCalendarStats,
  TbLayoutDashboard,
  TbShoppingBag,
} from "react-icons/tb";

type Props = {
  opened: boolean;
  setOpened: any;
};

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
  // {
  //   label: "Releases",
  //   icon: TbCalendarStats,
  //   initiallyOpened: true,
  //   links: [
  //     { label: "Upcoming releases", link: "/a" },
  //     { label: "Previous releases", link: "/b" },
  //     { label: "Releases schedule", link: "/c" },
  //   ],
  // },
];

const DashNavbar = ({ opened, setOpened }: Props) => {
  const LinksMemo = useMemo(() => {
    return Links;
  }, []);
  return (
    <div>
      <Navbar
        p="xs"
        hiddenBreakpoint="sm"
        hidden={!opened}
        withBorder={false}
        width={{ sm: 250, lg: 280 }}
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
