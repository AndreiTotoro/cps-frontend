import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

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
      fontWeight={700}
      maxWidth={"37em"}
      mt={["1em", "1em", "1em", "6.4em"]}
    >
      <Text
        p={2}
        fontSize={[30, 30, 30, 40]}
        bg={"black"}
        color={"white"}
      >
        ”MAI MULTE ȘTIINȚE, UN SINGUR UNIVERS”
      </Text>
      <Text
        fontSize={[20, 20, 20, 26]}
        pt={[10, 10, 10, 0]}
        color={"white"}
        textDecor={"underline"}
      >
        Concursul Interdisciplinar pentru elevii dornici să descopere tainele
        științei.
      </Text>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        gap={5}
        mt={"6em"}
      >
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Button
            rounded={0}
            fontSize={26}
            shadow={"2xl"}
            color={"white"}
            w={"100%"}
            bg={"#fc5310"}
          >
            Inscrie-te
          </Button>
        </motion.div>
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Button
            rounded={0}
            fontSize={26}
            color={"white"}
            bg="none"
            border={"1px solid white"}
            _hover={{ color: "black", bg: "white" }}
            shadow={"2xl"}
            w={"100%"}
          >
            Regulament
          </Button>
        </motion.div>
      </Flex>
    </Box>
  );
}
