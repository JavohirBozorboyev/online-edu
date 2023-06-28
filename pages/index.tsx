import Head from "next/head";

import HeroHeader from "@/src/Page/Home/HeroHeader";
import HomeFaq from "@/src/Page/Home/HomeFaq";
import HomeContactSection from "@/src/Page/Home/HomeContactSection";
import HomeServiceSection from "@/src/Page/Home/HomeServiceSection";
import HomeStatsSection from "@/src/Page/Home/HomeStatsSection";
import HomeQuizCard from "@/src/Page/Home/HomeQuizCard";
import { Box, Button, Container, Text } from "@mantine/core";
import { useHomeTitleStyle } from "@/styles/styleJs/useTitleStyle";

import React from "react";
import HomeCourse from "@/src/Page/Home/HomeCourse";

export default function Home() {
  const { classes } = useHomeTitleStyle();

  return (
    <>
      <main>
        <HeroHeader />

        {/* Course Card Component start */}
        {/* <Box my={"5rem"}>
          <Text
            className={classes.title}
            tt={"capitalize"}
            ta="center"
            mb={"md"}
          >
            Mashhur kurslar
          </Text>
          <Text
            fz={"md"}
            c="dimmed"
            className={classes.description}
            ta="center"
            mb="4rem"
          >
            Every once in a while, you’ll see a Golbat that’s missing some
            fangs. This happens when hunger drives it to try biting a Steel-type
            Pokémon.
          </Text>
          <Container size={"xl"} px={"0"}>
            <HomeCourse />
          </Container>
        </Box> */}
        {/* Course Card Component end */}
        {/* Servis Card Component start */}
        {/* <Box my={"5rem"}>
          <Text
            className={classes.title}
            tt={"capitalize"}
            ta="center"
            mb={"md"}
          >
            Imkoniyatlar
          </Text>
          <Text
            fz={"md"}
            c="dimmed"
            className={classes.description}
            ta="center"
            mb="4rem"
          >
            Every once in a while, you’ll see a Golbat that’s missing some
            fangs. This happens when hunger drives it to try biting a Steel-type
            Pokémon.
          </Text>
          <HomeServiceSection />
        </Box> */}
        {/* Course Card Component end */}

        {/* Quiz Card Component start */}
        {/* <Box my={"5rem"}>
          <Text className={classes.title} ta="center" mb={"md"}>
            Online Imtxonlar
          </Text>
          <Text
            fz={"md"}
            c="dimmed"
            className={classes.description}
            ta="center"
            mb="4rem"
          >
            Every once in a while, you’ll see a Golbat that’s missing some
            fangs. This happens when hunger drives it to try biting a Steel-type
            Pokémon.
          </Text>
          <Container size={"xl"} px={"0"}>
            <HomeQuizCard />
          </Container>
        </Box> */}
        {/* Quiz Card Component end */}

        {/* <HomeFaq />
        <HomeContactSection /> */}
      </main>
    </>
  );
}

// Home.getLayout = function PageLayout(page: ReactElement) {
//   return <>{page}</>;
// };
