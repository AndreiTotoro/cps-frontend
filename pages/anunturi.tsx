import Layout from "@/ components/Layout";
import { Stack, Text } from "@chakra-ui/react";

export default function Anunturi() {
  return (
    <Layout>
      <Stack
        alignSelf={"flex-start"}
        justifySelf={"flex-start"}
      >
        <Text
          color={"black"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          textShadow={"xl"}
          bg={"#fc5310"}
          textAlign={"center"}
          py={10}
        >
          Momentan, nu exista anunturi noi!
        </Text>
      </Stack>
    </Layout>
  );
}
