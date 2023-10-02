import Layout from "@/ components/Layout";
import { Box, Center, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Regulament() {
  return (
    <Layout>
      <Center>
        <Stack>
          <Text
            color={"black"}
            fontSize={"4xl"}
            fontWeight={"bold"}
          >
            Regulament
          </Text>
          <Divider />
          <iframe
            width={"1200px"}
            height={"600px"}
            src={
              "https://creangaprinstiinte.files.wordpress.com/2022/07/regulament-creanga-prin-stiinte-2022_220711_164437.pdf"
            }
          />
        </Stack>
      </Center>
    </Layout>
  );
}
