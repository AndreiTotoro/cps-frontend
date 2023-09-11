import Navbar from "@/ components/Navbar";
import { Box, Text } from "@chakra-ui/react";

import { Space_Mono } from "next/font/google";

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
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      color={"white"}
    >
      <Navbar />
    </Box>
  );
}
