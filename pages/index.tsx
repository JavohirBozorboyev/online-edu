import Head from "next/head";
import Navbar from "@/components/Navbar/AppNavigation";
import { ReactElement } from "react";
import HeroHeader from "@/src/Page/Home/HeroHeader";
import HomeFaq from "@/src/Page/Home/HomeFaq";
import HomeContactSection from "@/src/Page/Home/HomeContactSection";
import HomeServiceSection from "@/src/Page/Home/HomeServiceSection";
import HomeStatsSection from "@/src/Page/Home/HomeStatsSection";
import { useSession } from "next-auth/react";
import HomeCarousel from "@/src/Page/Home/HomeCarousel";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <main>
        <HeroHeader />
        <HomeStatsSection />
        <HomeCarousel />
        <HomeServiceSection />

        <HomeFaq />
        <HomeContactSection />
      </main>
    </>
  );
}

// Home.getLayout = function PageLayout(page: ReactElement) {
//   return <>{page}</>;
// };
