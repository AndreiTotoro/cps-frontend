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
      mt={"6.5em"}
    >
      <Text
        fontSize={40}
        bg={"yellow.300"}
        color={"black"}
      >
        "MAI MULTE ȘTIINȚE, UN SINGUR UNIVERS”
      </Text>
      <Text
        fontSize={26}
        color={"white"}
      >
        Concursul Interdisciplinar pentru elevii dornici să descopere tainele
        științei
      </Text>
      <Flex
        gap={5}
        mt={28}
      >
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Button
            rounded={0}
            fontSize={26}
            shadow={"2xl"}
            bg={"yellow.300"}
          >
            Inscie-te
          </Button>
        </motion.div>
        <motion.div
          whileHover={shakeAnimation} // Apply the animation on hover
        >
          <Button
            rounded={0}
            fontSize={26}
            color={"white"}
            border={"1px solid white"}
            _hover={{ color: "black", bg: "white" }}
            shadow={"2xl"}
            bg={"none"}
          >
            Regulament
          </Button>
        </motion.div>
      </Flex>
    </Box>
  );
}
