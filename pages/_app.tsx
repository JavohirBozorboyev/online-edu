import "@/styles/globals.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import type { ReactElement, ReactNode } from "react";
import type { NextPage, NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { Layout } from "@/layouts/Layout";
import { useRouter } from "next/router";
import DashboardLayout from "@/layouts/DashboardLayout";
import RouterTransition from "@/components/RouterTransition";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const router = useRouter();
  

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <>
          {router.asPath.startsWith("/dashboard") ? <DashboardLayout>
            {page}
          </DashboardLayout> :
            <Layout>{page}</Layout>}
        </>
      );
    });

  return (
    <>
      {" "}
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            colors: {
              // override dark colors to change them for all components
            },
          }}
        >
          <RouterTransition/>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
