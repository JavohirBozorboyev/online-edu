import Navbar from "@/components/Navbar/Navbar";
import { AppShell, Header } from "@mantine/core";
import * as React from "react";
import { ReactElement } from "react";

export interface ILayoutProps {
  children: ReactElement;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <AppShell
        padding="md"
        navbar={<Navbar />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
}
