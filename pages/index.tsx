import Layout from "@/ components/Layout";
import Main from "@/ components/Main";
import Navbar from "@/ components/Navbar";
import { Box, Text, VStack } from "@chakra-ui/react";

import { Space_Mono } from "next/font/google";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Main />
      <Text
        fontSize={12}
        pt={"7em"}
        color={"gray.400"}
      >
        ©️ 2023 Andrei Ciocoiu
      </Text>
    </Layout>
  );
}
