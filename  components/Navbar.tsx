import { HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Prin Stiinte"; // The full text you want to display
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start the underline effect
        const underlineInterval = setInterval(() => {
          setUnderline((prevUnderline) => !prevUnderline);
        }, 500); // Adjust the interval for underline speed
        return () => clearInterval(underlineInterval);
      }
    }, 150); // Adjust the interval for typing speed
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <HStack
      justifyContent={"center"}
      justifyItems={"center"}
      justify={"space-between"}
      p={16}
    >
      <Text
        flexBasis={"50%"}
        fontWeight={700}
        fontSize={30}
      >
        {`Creanga ${displayText}${underline ? "_" : ""}`}
      </Text>
      <HStack
        gap={10}
        flexBasis={"30%"}
      >
        <Text>Regulament</Text>
        <Text>Volume</Text>
        <Text>Premii</Text>
        <Text>Anunturi</Text>
      </HStack>
      <Text
        flexBasis={"20%"}
        textAlign={"end"}
        justifySelf={"flex-end"}
        decoration={"underline"}
      >
        Contact
      </Text>
    </HStack>
  );
}
