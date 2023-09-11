import Main from "@/ components/Main";
import Navbar from "@/ components/Navbar";
import { Box, Text, VStack } from "@chakra-ui/react";

import { Space_Mono } from "next/font/google";
import { Roboto } from "next/font/google";

const spaceMonoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <Box
      className={spaceMonoFont.className}
      h={"100vh"}
      bgImage={"bg.jpg"}
      bgSize={["cover"]}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      color={"white"}
      px={"5em"}
    >
      <Navbar />
      <Main />
      <Text
        fontSize={12}
        pt={"5em"}
        color={"gray.400"}
      >
        ©️ 2023 Andrei Ciocoiu
      </Text>
    </Box>
  );
}
