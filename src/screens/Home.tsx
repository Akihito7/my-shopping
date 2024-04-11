import { useState } from "react";
import { HStack, Heading, Input, ScrollView, VStack } from "native-base";
import { CardItem } from "../Components/CardItem";
import { Alert, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { addDoc, collection } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { ShoppingList } from "../Components/ShoppingList";

export function Home() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    async function handleAddDocument() {
        try {
            const docRef = await addDoc(collection(db, "products"), {
                name,
                quantity,
                done: false,
            });

            setName("")
            setQuantity(0)

            Alert.alert("Sucesso", "Produto cadastrado com sucesso!");

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

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
                    color="black"
                    borderColor="gray.100"
                    _focus={{
                        bg: "#f4f4f5",
                        borderColor: "#f4f4f5"
                    }}
                    placeholder="Precisamos"
                    fontSize="md"
                    onChangeText={setName}
                    value={name}
                >

                </Input>
                <Input
                    w={16}
                    bg="gray.100"
                    keyboardType="numeric"
                    textAlign="center"
                    color="black"
                    borderColor="gray.100"
                    _focus={{
                        bg: "#f4f4f5",
                        borderColor: "#f4f4f5"
                    }}
                    fontSize="md"
                    placeholder="0"
                    onChangeText={(text) => {
                        setQuantity(Number(text))}}

                    value={quantity === 0 ? "" : String(quantity)}

                >



                </Input>
                <TouchableOpacity style={{
                    width: 64,
                    backgroundColor: "#00875F",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                    onPress={handleAddDocument}
                >
                    <MaterialIcons name="add-shopping-cart" size={24} color="white" />


                </TouchableOpacity>
            </HStack>

            <ShoppingList />
        </VStack>
    )
}