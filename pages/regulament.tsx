import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Regulament() {
  return (
    <Layout>
      <VStack
        p={[2, 2, 2, 10]}
        bg={"#fb4f0e"}
        gap={5}
        w={["100%", "100%", "100%", "70%"]}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        justifyContent={"center"}
        mx={"auto"}
      >
        <Text fontSize={"3xl"}>Regulament</Text>
        <Dropdown
          dropdownTitle="Regulament Creanga Prin Stiinte 2023"
          dropdownFile="https://creangaprinstiinte.files.wordpress.com/2023/04/regulament-creangaprinstiinte2023.pdf"
        />
        <Dropdown
          dropdownTitle="Regulament Creanga Prin Stiinte 2022"
          dropdownFile="https://creangaprinstiinte.files.wordpress.com/2022/07/regulament-creanga-prin-stiinte-2022_220711_164437.pdf"
        />
      </VStack>
    </Layout>
  );
}
