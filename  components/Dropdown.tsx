import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function Dropdown({
  dropdownTitle,
  dropdownFile,
}: {
  dropdownTitle: string;
  dropdownFile: string;
}) {
  return (
    <Accordion
      w={"100%"}
      allowToggle
      border={"3px solid black"}
    >
      <AccordionItem
        border={"3px solid black"}
        bg={"white"}
        color={"black"}
        fontWeight={"bold"}
      >
        <h2>
          <AccordionButton border={"3px solid black"}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
            >
              {dropdownTitle}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <iframe
            width={"100%"}
            height={"600px"}
            src={dropdownFile}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
