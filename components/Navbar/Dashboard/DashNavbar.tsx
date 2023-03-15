import { Navbar, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import { TbCalendarStats, TbHome } from "react-icons/tb";

type Props = {
  opened?: boolean;
};

const Links = [
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
      { label: "Upcoming releases", link: "/a" },
      { label: "Previous releases", link: "/b" },
      { label: "Releases schedule", link: "/" },
    ],
  },
];

const DashNavbar = ({ opened }: Props) => {
  const LinksMemo = useMemo(() => {
    return Links;
  }, []);
  return (
    <div>
      <Navbar
        p="sm"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300 }}
      >
        <NavbarLinksGroup links={LinksMemo} />
      </Navbar>
    </div>
  );
};

export default DashNavbar;
