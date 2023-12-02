import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { API_URL } from "@/constants";
import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Anunt {
  id: number;
  titlu: string;
  continut: string;
}

export default function Anunturi() {
  const [anunturi, setAnunturi] = useState<Anunt[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const obtineRegulamente = async () => {
    const anunturi = await axios.get<Anunt[]>(API_URL + "get/anunturi");
    setAnunturi(anunturi.data);
    setIsLoading(false);
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
        <Text fontSize={"3xl"}>Anunturi</Text>
        {isLoading ? (
          <Text>Se incarca...</Text>
        ) : anunturi && anunturi.length > 0 ? (
          anunturi?.map((anunt) => (
            <Box key={anunt.id}>
              <Text
                color={"black"}
                fontWeight={"bold"}
                fontSize={"2xl"}
              >
                {anunt.titlu}
              </Text>
              <Text>{anunt.continut}</Text>
            </Box>
          ))
        ) : (
          <Text
            fontWeight={"bold"}
            color={"black"}
          >
            Momentan, nu exista niciun anunt!
          </Text>
        )}
      </VStack>
    </Layout>
  );
}
