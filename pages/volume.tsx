import Dropdown from "@/ components/Dropdown";
import Layout from "@/ components/Layout";
import { API_URL } from "@/constants";
import { Center, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Volum {
  id: number;
  titlu: string;
  link: string;
}

export default function Volume() {
  const [volume, setVolume] = useState<Volum[] | []>([]);

  const obtineVolume = async () => {
    const volume = await axios.get<Volum[]>(API_URL + "get/volume");
    setVolume(volume.data);
  };

  useEffect(() => {
    obtineVolume();
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
        <Text fontSize={"3xl"}>Lista Volumelor Publicate</Text>
        {volume && volume.length > 0 ? (
          volume?.map((volum) => (
            <Dropdown
              key={volum.id}
              dropdownTitle={volum.titlu}
              dropdownFile={volum.link}
            />
          ))
        ) : (
          <Text>Se incarca...</Text>
        )}
      </VStack>
    </Layout>
  );
}
