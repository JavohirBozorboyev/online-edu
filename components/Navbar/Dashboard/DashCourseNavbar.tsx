import { Navbar } from "@mantine/core";
import React from "react";
import DashVideoLinksGroup from "@/src/Page/Dashboard/Other/DashVideoLinksGroup";

type Props = {
  opened: boolean;
  setOpened: any;
};

const Links = [
  {
    label: "Kirish",

    url: "/dashboard/course/js",
  },
  {
    label: "1-dars",

    initiallyOpened: true,
    links: [
      { label: "Dars", link: "/dashboard/course/js/1dars" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "2-dars",

    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "3-dars",

    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "4-dars",

    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
];

const DashCourseNavbar = ({ opened, setOpened }: Props) => {
  return (
    <div>
      <Navbar
        p="0"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 280, lg: 300 }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <DashVideoLinksGroup setOpened={setOpened} links={Links} />
      </Navbar>
    </div>
  );
};

export default DashCourseNavbar;
