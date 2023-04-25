import { Button, Navbar, Text } from "@mantine/core";
import React, { useMemo } from "react";
import NavbarLinksGroup from "../NavbarLinksGroup";
import {
  TbCalendarStats,
  TbLayoutDashboard,
  TbListDetails,
  TbShoppingBag,
  TbVideo,
} from "react-icons/tb";
import  DashTabNavbar  from "./DashCourseTabNavbar";

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
    label: "Kurslarim",
    icon: TbVideo,
    url: "/dashboard/course",
  },
  {
    label: "Imtxonlar",
    icon: TbListDetails,
    url: "/dashboard/quiz",
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
        p="0"
        hiddenBreakpoint="sm"
        hidden={!opened}
        withBorder={false}
        width={{ sm: 220, md: 250, lg: 270 }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        {/* <DashTabNavbar /> */}
        <NavbarLinksGroup links={LinksMemo} setOpened={setOpened} />
      </Navbar>
    </div>
  );
};

export default DashNavbar;
