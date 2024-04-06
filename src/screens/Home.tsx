import { HStack, Heading, Input, ScrollView, VStack } from "native-base";
import { CardItem } from "../Components/CardItem";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export function Home() {
    return (
        <VStack w="full" h="full" bg="white">
            <HStack
                w="full"
                h="15%"
                bg="green.700"
                pt={16}
                justifyContent="center"

            >
                <Heading color="white">Lista de compra</Heading>
            </HStack>

            <HStack
             my={4} 
             px={4} 
             space={1}
             >
                <Input
                    flex={1}
                    bg="gray.100"
                    color="white"
                    borderColor="gray.100"
                    _focus={{
                        bg: "#f4f4f5",
                        borderColor : "#f4f4f5"
                    }}
                    placeholder="precisamos"
                    fontSize="md"
                >

                </Input>
                <Input
                    w={16}
                    bg="gray.100"
                    keyboardType="numeric"
                    textAlign="center"
                    color="white"
                    borderColor="gray.100"
                    _focus={{
                        bg: "#f4f4f5",
                        borderColor : "#f4f4f5"
                    }}
                    fontSize="md"
                    placeholder="1"
                >



                </Input>
                <TouchableOpacity style={{
                    width: 64,
                    backgroundColor: "#00875F",
                    borderRadius: 5,
                    alignItems:"center",
                    justifyContent: "center"
                }}>
                    <MaterialIcons name="add-shopping-cart" size={24} color="white" />


                </TouchableOpacity>
            </HStack>

            <ScrollView px={4} mb={4}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </ScrollView>
        </VStack>
    )
}