import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import AppNavigation from "@/components/Navbar/AppNavigation";
import { useRouter } from "next/router";
import DashNavigation from "@/components/Navbar/Dashboard/DashNavigation";
import DashNavbar from "@/components/Navbar/Dashboard/DashNavbar";
import AppFooter from "@/components/Footer/AppFooter";
import BottomNavigation from "@/components/Tabs/BottomNavigation";

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
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
          // padding: `${act ? null : "0px"}`,
          overflowX: "hidden",

          [theme.fn.smallerThan("sm")]: {
            paddingX: 0,
            paddingBottom: 65,
          },
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        act ? <DashNavbar opened={opened} setOpened={setOpened} /> : undefined
      }
      footer={
        <>
          <BottomNavigation />
          {!act && <AppFooter />}
        </>
      }
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
