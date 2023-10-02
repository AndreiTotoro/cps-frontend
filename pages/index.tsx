import Layout from "@/ components/Layout";
import Main from "@/ components/Main";
import Navbar from "@/ components/Navbar";
import { Box, Text, VStack } from "@chakra-ui/react";

import { Space_Mono } from "next/font/google";

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
