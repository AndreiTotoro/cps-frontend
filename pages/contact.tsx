import Layout from "@/ components/Layout";
import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <Box
        p={10}
        pb={"7em"}
        textAlign={"center"}
        color={"black"}
        w={["100%", "100%", "100%", "50%"]}
        mx={"auto"}
        rounded={"xl"}
        bg={"#fb4f0e"}
      >
        <Text
          fontSize={"3xl"}
          color={"white"}
        >
          Contact
        </Text>
        <Divider size={"xl"} />
        <Stack
          pt={"3em"}
          gap={6}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"black"}
          >
            Colegiul Național ”Ion Creanga”
          </Text>
          <Text fontStyle={"italic"}>
            Str. Cuza Vodă nr 51, București, sector 4, cod 040281
          </Text>

          <Text
            textDecoration={"underline"}
            color={"white"}
          >
            Email: creangaprinstiinte@yahoo.com
          </Text>
        </Stack>
      </Box>
    </Layout>
  );
}
