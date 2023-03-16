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
import AppNavigation from "@/components/Navbar/AppNavigation";
import { useRouter } from "next/router";
import DashNavigation from "@/components/Navbar/Dashboard/DashNavigation";
import DashNavbar from "@/components/Navbar/Dashboard/DashNavbar";
import AppFooter from "@/components/Footer/AppFooter";

interface LayoutType {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutType) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: "0",
          margin: 0,
          width: "100%",
          [theme.fn.smallerThan("sm")]: {
            padding: 0,
          },
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        router.route.startsWith("/dashboard") ? (
          <DashNavbar opened={opened} />
        ) : undefined
      }
      footer={router.route.startsWith("/dashboard") ? undefined : <AppFooter />}
      header={
        router.route.startsWith("/dashboard") ? (
          <DashNavigation opened={opened} setOpened={setOpened} />
        ) : (
          <AppNavigation />
        )
      }
    >
      {children}
    </AppShell>
  );
}
