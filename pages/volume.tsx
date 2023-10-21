import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { Center, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Volume() {
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
        mt={["5em", "5em", "5em", 0]}
        justifyContent={"center"}
        mx={"auto"}
      >
        <Text fontSize={"3xl"}>Lista Volumelor Publicate</Text>
        <Dropdown
          dropdownTitle="CREANGA… PRIN ȘTIINȚE! VOLUMUL II – MAI MULTE ȘTIINȚE, UN SINGUR UNIVERS "
          dropdownFile="https://creangaprinstiinte.files.wordpress.com/2023/07/creanga.-prin-stiinte-volum-ii-mai-multe-stiinte-un-singur-univers.pdf"
        />
        <Dropdown
          dropdownTitle="CREANGA… PRIN ȘTIINȚE! VOLUMUL I – (BIO)DIVERSITATEA ÎN PERICOL! "
          dropdownFile="https://creangaprinstiinte.files.wordpress.com/2022/07/creanga...-prin-stiinte-nr12022-issn-biodiversitatea-in-pericol.pdf"
        />
      </VStack>
    </Layout>
  );
}
