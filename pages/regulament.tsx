import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { API_URL } from "@/constants";
import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Regulament {
  id: number;
  titlu: string;
  link: string;
}

export default function Regulament() {
  const [regulamente, setRegulamente] = useState<Regulament[] | []>([]);

  const obtineRegulamente = async () => {
    const regulamente = await axios.get<Regulament[]>(
      API_URL + "get/regulamente"
    );
    setRegulamente(regulamente.data);
  };

  useEffect(() => {
    obtineRegulamente();
  }, []);

  return (
    <Layout>
      <VStack
        p={[2, 2, 2, 10]}
        bg={"#fb4f0e"}
        gap={5}
        w={["100%", "100%", "100%", "70%"]}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        justifyContent={"center"}
        mx={"auto"}
      >
        <Text fontSize={"3xl"}>Regulament</Text>
        {regulamente && regulamente.length > 0 ? (
          regulamente?.map((regulament) => (
            <Dropdown
              key={regulament.id}
              dropdownTitle={regulament.titlu}
              dropdownFile={regulament.link}
            />
          ))
        ) : (
          <Text>Se incarca...</Text>
        )}
      </VStack>
    </Layout>
  );
}
