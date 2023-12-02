import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { API_URL } from "@/constants";
import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Premiu {
  id: number;
  titlu: string;
  link: string;
}

export default function Premii() {
  const [premii, setPremii] = useState<Premiu[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const obtinePremii = async () => {
    const premii = await axios.get<Premiu[]>(API_URL + "get/premii");
    setPremii(premii.data);
  };

  useEffect(() => {
    obtinePremii();
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
        <Text fontSize={"3xl"}>Premii</Text>
        {isLoading ? (
          <Text>Se incarca...</Text>
        ) : premii && premii.length > 0 ? (
          premii?.map((premiu) => (
            <Dropdown
              key={premiu.id}
              dropdownTitle={premiu.titlu}
              dropdownFile={premiu.link}
            />
          ))
        ) : (
          <Text>Momentan, nu exista niciun premiu!</Text>
        )}
      </VStack>
    </Layout>
  );
}
