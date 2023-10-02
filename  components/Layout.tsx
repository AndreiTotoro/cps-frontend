import { Box } from "@chakra-ui/react";
import { Space_Mono } from "next/font/google";
import React from "react";

const spaceMonoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      className={spaceMonoFont.className}
      h={"100vh"}
      bgImage={"bg2.jpg"}
      bgSize={["cover"]}
      bgPosition={"center"}
      bgRepeat={"repeat"}
      color={"white"}
      px={[7, 7, 7, "5em"]}
    >
      {children}
    </Box>
  );
}
