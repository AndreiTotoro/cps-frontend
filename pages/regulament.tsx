import Layout from "@/ components/Layout";
import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Regulament() {
  return (
    <Layout>
      <Stack>
        <Text
          color={"white"}
          fontSize={"4xl"}
          fontWeight={"bold"}
        >
          Regulament
        </Text>
        <Divider />
        <VStack>
          <iframe
            width={"100%"}
            height={"600px"}
            src={
              "https://creangaprinstiinte.files.wordpress.com/2023/04/regulament-creangaprinstiinte2023.pdf"
            }
          />
        </VStack>
      </Stack>
    </Layout>
  );
}
