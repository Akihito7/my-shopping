import { Box, HStack, Heading, Input, ScrollView, Text, VStack } from "native-base";
import { CardItem } from "../Components/CardItem";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export function Receipts() {
    return (
        <VStack w="full" h="full" bg="white">
            <HStack
                w="full"
                h="15%"
                bg="green.700"
                pt={16}
                justifyContent="center"

            >
                <Heading color="white">Comprovantes</Heading>
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

                <Text textAlign="center" mt={2} mb={2} color="gray.400">Informações da foto</Text>
            </VStack>

        </VStack >
    )
}