import Head from "next/head";
import { Inter } from "next/font/google";

// components
import MainLayout from "@/components/layouts/Main.layouts";
import MainSection from "@/components/sections/Main.sections";
import MainTextCard from "@/components/cards/MainText.cards";
import MainTabSection from "@/components/sections/MainTab.sections";
import TopDestinationSection from "@/components/sections/TopDestination.sections";
import TrendingSection from "@/components/sections/Trending.sections";
import TravelTipsSection from "@/components/sections/TravelTips.sections";
import WhyChooseSection from "@/components/sections/WhyChoose.sections";
import TodayTopSection from "@/components/sections/TodayTop.sections";
import MainFooter from "@/components/footer/Main.footer";
// mui
import { Box, Typography } from "@mui/material";

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
        <MainTextCard
          title="Let's The World Together!"
          description="Find awesome hotel, tour, car and activities in London"
        />
        <MainTabSection />
        <TopDestinationSection />
        <TrendingSection />
        <TravelTipsSection />
        <WhyChooseSection />
        <TodayTopSection />
        <MainFooter />
      </MainLayout>
    </>
  );
}
