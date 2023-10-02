import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { Space_Mono } from "next/font/google";
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const spaceMonoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      className={spaceMonoFont.className}
      bgImage={"bg2.jpg"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={["cover"]}
    >
      <Container
        maxW={1500}
        color={"white"}
        px={[5, 5, 5, "5em"]}
      >
        <Stack
          minH={"100vh"}
          justify={"space-between"}
        >
          <Navbar />
          {children}
          <Text
            fontSize={12}
            pt={"7em"}
            color={"gray.400"}
          >
            ©️ 2023 Andrei Ciocoiu
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
