import { Button, HStack, Heading, Input, ScrollView, Text, VStack } from "native-base";
import { CardItem } from "../Components/CardItem";

export function Uploads() {
    return (
        <VStack w="full" h="full" bg="white">
            <HStack
                w="full"
                h="15%"
                bg="green.700"
                pt={16}
                justifyContent="center"

            >
                <Heading color="white">Uploads</Heading>
            </HStack>

            <VStack px={10} mt={8}>
                <Input
                    h={56}
                    w="full"
                    borderStyle="dashed"
                    borderColor="gray.300"
                    borderWidth={3}
                    placeholder="clique aqui para adicionar ou trocar a foto"
                    multiline={true}
                    fontSize="xl"
                    textAlign="center"
                    _focus={{
                        backgroundColor: "white",
                        borderColor: "gray.300"
                    }}

                />

                <Button
                    h={16}
                    bg="green.700"
                    mt={4}
                >
                    <Heading color="white" fontSize="lg">Fazer upload</Heading>

                </Button>

                <Heading textAlign="center" color="gray.400" fontSize="5xl" mt={12}>
                    0%
                </Heading>
                <Text textAlign="center" color="gray.400" >0 de 100 bytes transferidos</Text>
            </VStack>


        </VStack >
    )
}