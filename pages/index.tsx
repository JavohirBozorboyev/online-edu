import Head from "next/head";

import HeroHeader from "@/src/Page/Home/HeroHeader";

import { Box, Button, Container, Text } from "@mantine/core";
import { useHomeTitleStyle } from "@/styles/styleJs/useTitleStyle";

import React from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { classes } = useHomeTitleStyle();
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <>
      <main>
        <HeroHeader />
      </main>
    </>
  );
}

// Home.getLayout = function PageLayout(page: ReactElement) {
//   return <>{page}</>;
// };
