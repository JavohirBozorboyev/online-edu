import "@/styles/globals.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";
import RouterTransition from "@/components/Other/RouterTransition";
import { Notifications } from "@mantine/notifications";
import { SWRConfig } from "swr";
import axios from "axios";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function App({
  Component,
  pageProps: { sesion, ...pageProps },
}: AppPropsWithLayout) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const router = useRouter();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

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
          }}
        >
          <RouterTransition />
          <Notifications />
          <SWRConfig
            value={{
              refreshInterval: 1000*60*60,
              fetcher,
            }}
          >
            <SessionProvider session={sesion}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </SWRConfig>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
