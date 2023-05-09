import Head from "next/head";

import HeroHeader from "@/src/Page/Home/HeroHeader";
import HomeFaq from "@/src/Page/Home/HomeFaq";
import HomeContactSection from "@/src/Page/Home/HomeContactSection";
import HomeServiceSection from "@/src/Page/Home/HomeServiceSection";
import HomeStatsSection from "@/src/Page/Home/HomeStatsSection";

import HomeCarousel from "@/src/Page/Home/HomeCarousel";
import QuizCarousel from "@/components/Carousel/QuizCarousel";
import { Box, Container, Text } from "@mantine/core";
import { useHomeTitleStyle } from "@/styles/styleJs/useTitleStyle";
import { useSession } from "next-auth/react";

export default function Home() {
  const { classes, theme } = useHomeTitleStyle();
  const { data: session, status,  } = useSession();
  console.log(status);
  return (
    <>
      <main>
        <HeroHeader />
        <HomeStatsSection />

        {/* Course Card Component start */}
        <Box my={"5rem"}>
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
            <HomeCarousel />
          </Container>
        </Box>
        {/* Course Card Component end */}
        {/* Servis Card Component start */}
        <Box my={"5rem"}>
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
        </Box>
        {/* Course Card Component end */}

        {/* Quiz Card Component start */}
        <Box my={"5rem"}>
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
            <QuizCarousel />
          </Container>
        </Box>
        {/* Quiz Card Component end */}

        <HomeFaq />
        <HomeContactSection />
      </main>
    </>
  );
}

// Home.getLayout = function PageLayout(page: ReactElement) {
//   return <>{page}</>;
// };
