import { Box, Container } from "@chakra-ui/react";
import { Space_Mono } from "next/font/google";
import React from "react";

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
      {children}
    </Container>
  );
}
