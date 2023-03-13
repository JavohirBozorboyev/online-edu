import React, { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import DashboardNav from "@/components/Navbar/DashboardNav";
import Navbar from "@/components/Navbar/Navbar";

export default function DashboardLayout({ children }: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={<DashboardNav />}
      header={<Navbar />}
    >
      {children}
    </AppShell>
  );
}
