import { Navbar } from "@mantine/core";
import React from "react";
import DashCourseTabNavbar from "./DashCourseTabNavbar";

type Props = {
  opened: boolean;
  setOpened: any;
};

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
        <DashCourseTabNavbar setOpened={setOpened} />
      </Navbar>
    </div>
  );
};

export default DashCourseNavbar;
