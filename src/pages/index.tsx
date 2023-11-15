import Head from "next/head";
import { Inter } from "next/font/google";

// components

// mui
import { Box } from "@mui/material";
import MainLayout from "@/components/layouts/Main.layouts";

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
        <Box>hello</Box>
      </MainLayout>
    </>
  );
}
