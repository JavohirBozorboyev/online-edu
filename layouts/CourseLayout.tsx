import { useState, useCallback } from "react";
import {
  AppShell,
  Aside,
  Box,
  Button,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import DashNavigation from "@/components/Navbar/Dashboard/DashNavigation";

import DashNavbar from "@/components/Navbar/Dashboard/DashNavbar";
import DashCourseAside from "@/components/Navbar/Dashboard/DashCourseAside";
import { TbList } from "react-icons/tb";
import BottomNavigation from "@/components/Tabs/BottomNavigation";

interface CourseLayoutType {
  children: React.ReactElement;
}

export default function CourseLayout({ children }: CourseLayoutType) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [asideActive, setAsideActive] = useState(false);

  const toggleAsideBar = useCallback(() => {
    setAsideActive(!asideActive);
  }, [asideActive]);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<DashNavbar opened={opened} setOpened={setOpened} />}
      aside={
        <MediaQuery
          smallerThan="sm"
          styles={{ display: `${asideActive ? "block" : "none"}` }}
        >
          <Aside
            p="0"
            hiddenBreakpoint="sm"
            width={{ sm: 250, lg: 300 }}
            sx={{
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.white,

              zIndex: 10,
              [theme.fn.smallerThan("sm")]: { marginTop: "40px" },
            }}
          >
            <DashCourseAside toggleAsideBar={toggleAsideBar} />
          </Aside>
        </MediaQuery>
      }
      footer={<BottomNavigation />}
      header={<DashNavigation opened={opened} setOpened={setOpened} />}
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Box
          m={"-md"}
          mb={"xl"}
          py={"2px"}
          sx={{
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="light"
            leftIcon={<TbList size={"1.2rem"} />}
            radius={"0"}
            color="gray"
            onClick={toggleAsideBar}
          >
            {"Darslar Ro'yhati"}
          </Button>
        </Box>
      </MediaQuery>

      {children}
    </AppShell>
  );
}
