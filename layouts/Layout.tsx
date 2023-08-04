import { useEffect, useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import AppNavigation from "@/components/Navbar/AppNavigation";
import { useRouter } from "next/router";
import BottomNavigation from "@/components/Tabs/BottomNavigation";
import AppNavbar from "@/components/Navbar/AppNavbar";
import { useSession } from "next-auth/react";
import { setCookie } from "cookies-next";

interface LayoutType {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutType) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const act = router.route.startsWith("/dashboard");

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.name) {
      setCookie("token", `${session?.user?.name}`);
    }
  }, [session, router, act]);

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
      header={<AppNavigation opened={opened} setOpened={setOpened} />}
      navbar={<AppNavbar opened={opened} setOpened={setOpened} />}
      footer={
        <>
          {/* <BottomNavigation /> */}
          {/* {!act && <AppFooter />} */}
        </>
      }
    >
      {children}
    </AppShell>
  );
}
