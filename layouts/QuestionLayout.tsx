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
  ScrollArea,
  Tabs,
} from "@mantine/core";
import { useRouter } from "next/router";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";

interface Props {
  children: any;
  list: any;
}

export default function QuestionLayout({ children, list }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  console.log(list);

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
      navbar={
        <Navbar
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
        >
          <ScrollArea h={"100vh"}>
            <Tabs radius="xs" orientation="vertical">
              <Tabs.List w={"100%"}>
                {list.questions.map((item: any, i: number) => {
                  return <></>;
                })}
              </Tabs.List>
            </Tabs>
          </ScrollArea>
        </Navbar>
      }
      header={
        <Header height={{ base: 50 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="sm"
              />
            </MediaQuery>

            <Text>{list.name}</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
