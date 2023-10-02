import { Flex, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiWoodStick } from "react-icons/gi";

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
      flexDir={["column", "column", "column", "column", "row"]}
      justifyContent={"center"}
      justifyItems={"center"}
      justify={"space-between"}
      py={16}
    >
      <Flex
        align={"center"}
        flexBasis={"40%"}
        gap={2}
        fontWeight={700}
        fontSize={[22, 22, 22, 30]}
      >
        {`Creanga ${displayText}${underline ? "_" : ""}`}
      </Flex>
      <HStack
        gap={10}
        flexBasis={"50%"}
      >
        <MenuLink text="Regulament" />
        <MenuLink text="Volume" />
        <MenuLink text="Premii" />
        <MenuLink text="Anunturi" />
      </HStack>
      <MenuLink text="Contact" />
    </HStack>
  );
}

const MenuLink = ({ text }: {text: string}) => {
  const [underline, setUnderline] = useState(false);

  return (
    <Text
      _hover={{
        cursor: "pointer",
        color: "#fc5310",
        textDecoration: "underline",
        transform: "scale(1.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {text}
    </Text>
  );
};