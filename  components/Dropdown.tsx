import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { GoDownload } from "react-icons/go";
import React from "react";

export default function Dropdown({
  dropdownTitle,
  dropdownFile,
}: {
  dropdownTitle: string;
  dropdownFile: string;
}) {
  return (
    <Link
      href={dropdownFile}
      w={"100%"}
      border={"2px solid black"}
    >
      <Box
        border={"3px solid black"}
        bg={"white"}
        color={"black"}
        fontWeight={"bold"}
      >
        <Flex
          px={2}
          justify={"center"}
          align={"center"}
          gap={2}
          border={"2px solid black"}
        >
          <Text
            p={3}
            align={"center"}
          >
            {dropdownTitle}
          </Text>
          <GoDownload size={"1.5em"} />
        </Flex>
      </Box>
    </Link>
  );
}
