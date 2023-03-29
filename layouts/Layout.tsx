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
  const act = router.route.startsWith("/dashboard");
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          // padding: `${act ? null : "0px"}`,

          [theme.fn.smallerThan("sm")]: {
            paddingX: 0,
          },
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        act ? <DashNavbar opened={opened} setOpened={setOpened} /> : undefined
      }
      footer={act ? undefined : <AppFooter />}
      header={
        act ? (
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
