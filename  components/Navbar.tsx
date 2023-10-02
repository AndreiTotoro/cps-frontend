import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiWoodStick } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

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
      justify={"space-between"}
      py={[10, 10, 10, 16]}
    >
      <Link
        href="./"
        flexBasis={["60%", "60%", "60%", "40%"]}
        gap={2}
        fontWeight={700}
        fontSize={[24, 24, 24, 30]}
      >
        {`Creanga ${displayText}${underline ? "_" : ""}`}
      </Link>
      <HStack
        display={["none", "none", "none", "flex"]}
        gap={10}
        flexBasis={"50%"}
      >
        <MenuLink
          link="./regulament"
          text="Regulament"
        />
        <MenuLink
          link="./volume"
          text="Volume"
        />
        <MenuLink
          link="./premii"
          text="Premii"
        />
        <MenuLink
          link="./anunturi"
          text="Anunturi"
        />
      </HStack>
      <Box display={["none", "none", "none", "block"]}>
        <MenuLink
          text="Contact"
          link="./contact"
        />
      </Box>
      <Box display={["block", "block", "block", "none"]}>
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              <Box color="white">
                <FaBars />
              </Box>
            }
            variant="outline"
          />
          <MenuList bg={"orange"}>
            <MenuItem bg={"orange"}>
              <MenuLink
                text="Regulament"
                link="./regulament"
              />
            </MenuItem>
            <MenuItem bg={"orange"}>
              <MenuLink
                text="Volume"
                link="./volume"
              />
            </MenuItem>
            <MenuItem bg={"orange"}>
              <MenuLink
                text="Premii"
                link="./premii"
              />
            </MenuItem>
            <MenuItem bg={"orange"}>
              <MenuLink
                text="Anunturi"
                link="./anunturi"
              />
            </MenuItem>
            <MenuItem bg={"orange"}>
              <MenuLink
                text="Contact"
                link="./contact"
              />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
}

const MenuLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      _hover={{
        cursor: "pointer",
        color: "#fc5310",
        textDecoration: "underline",
        transform: "scale(1.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {text}
    </Link>
  );
};
