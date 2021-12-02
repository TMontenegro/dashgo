import { Flex, Button, Stack } from "@chakra-ui/react";
import DGInput from "../components/Form/DGInput";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <DGInput name="email" type="email" label="E-mail" />
          <DGInput name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
