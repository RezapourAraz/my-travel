import Head from "next/head";
import { Inter } from "next/font/google";

// components

// mui
import { Box, Typography } from "@mui/material";
import MainLayout from "@/components/layouts/Main.layouts";
import MainSection from "@/components/sections/Main.sections";
import MainTextCard from "@/components/cards/MainText.cards";
import MainTabSection from "@/components/sections/MainTab.sections";
import TopDestinationSection from "@/components/sections/TopDestination.sections";
import TrendingSection from "@/components/sections/Trending.sections";
import TravelTipsSection from "@/components/sections/TravelTips.sections";
import WhyChooseSection from "@/components/sections/WhyChoose.sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Travel</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <MainSection />
        <MainTextCard />
        <MainTabSection />
        <TopDestinationSection />
        <TrendingSection />
        <TravelTipsSection />
        <WhyChooseSection />
      </MainLayout>
    </>
  );
}
