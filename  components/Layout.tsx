import { Box, Container, Text } from "@chakra-ui/react";
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
    <Container
      maxW={1500}
      className={spaceMonoFont.className}
      minH={"100vh"}
      bgImage={"bg2.jpg"}
      bgSize={["cover"]}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      color={"white"}
      px={[5, 5, 5, "5em"]}
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
    </Container>
  );
}
