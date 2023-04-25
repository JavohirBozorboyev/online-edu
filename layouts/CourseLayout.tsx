import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import DashNavigation from "@/components/Navbar/Dashboard/DashNavigation";
import DashCourseNavbar from "@/components/Navbar/Dashboard/DashCourseNavbar";
import DashTabs from "@/src/Page/Dashboard/Other/DashTabs";

interface CourseLayoutType {
  children: React.ReactElement;
}

export default function CourseLayout({ children }: CourseLayoutType) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
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
      navbar={<DashCourseNavbar opened={opened} setOpened={setOpened} />}
      //   aside={
      //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 250 }}>
      //         <Text>Application sidebar</Text>
      //       </Aside>
      //     </MediaQuery>
      //   }
      footer={<DashTabs />}
      header={<DashNavigation opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}
