import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { ReactElement } from "react";
import HomeHeroHeader from "@/PageComponents/Home/HomeHeroHeader";

export default function Home() {
  return (
    <>
      <main>
        <HomeHeroHeader />
      </main>
    </>
  );
}

// Home.getLayout = function PageLayout(page: ReactElement) {
//   return <>{page}</>;
// };
