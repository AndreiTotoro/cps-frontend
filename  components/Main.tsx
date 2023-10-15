import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";

export default function Main() {
  // Define the animation properties
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0], // Horizontal shaking motion
    transition: {
      duration: 0.5, // Duration of the animation
    },
  };

  return (
    <Box
      mx={["auto", "auto", "auto", 0]}
      fontWeight={700}
      maxWidth={"37em"}
      mt={["1em", "1em", "1em", "6.4em"]}
    >
      <Box>
        <Text
          p={[5, 5, 5, 2]}
          fontSize={[28, 28, 28, 40]}
          bg={"black"}
          color={"white"}
        >
          ”MAI MULTE ȘTIINȚE, UN SINGUR UNIVERS”
        </Text>
        <Text
          fontWeight={700}
          textShadow={"2xl"}
          fontSize={[24, 24, 24, 26]}
          pt={[10, 10, 10, 0]}
          color={"white"}
          textDecor={"underline"}
        >
          Proiect <i>interdisciplinar</i> pentru elevii dornici să descopere
          tainele științei.
        </Text>
      </Box>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        gap={5}
        mt={"6em"}
      >
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Button
            rounded={["2xl", "2xl", "2xl", 0]}
            fontSize={26}
            shadow={"2xl"}
            color={"white"}
            height={"55px"}
            w={"100%"}
            bg={"#fc5310"}
          >
            Inscrie-te
          </Button>
        </motion.div>
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Link href="./regulament">
            <Button
              rounded={["2xl", "2xl", "2xl", 0]}
              fontSize={26}
              color={"black"}
              height={"55px"}
              bg="white"
              border={"1px solid white"}
              _hover={{ color: "black", bg: "white" }}
              shadow={"2xl"}
              w={"100%"}
            >
              Regulament
            </Button>
          </Link>
        </motion.div>
      </Flex>
    </Box>
  );
}
