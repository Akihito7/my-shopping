import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { HStack, Heading, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { db } from "../configs/firebaseConfig";


type PropsCardItem = {
    id: string;
    name: string;
    quantity: number;
    done: boolean;
}

export function CardItem({ data } : {data : PropsCardItem}) {

    async function handleToggleDone() {
        await updateDoc(doc(db, "products", data.id), {
            done: !data.done,
        })
    }

    async function handleDeleteDocument() {
        await deleteDoc(doc(db, "products", data.id))
    }


    return (
        <HStack
            w="full"
            bg="gray.100"
            h={24}
            px={4}
            borderRadius={5}
            alignItems="center"
            mt={2}
            
        >
            <VStack flex={1}>
                <Heading
                    fontSize="lg"
                    strikeThrough={data.done ? true : false}
                    isTruncated
                    textTransform="capitalize"
                >
                    {data.name}
                </Heading>

                <Text
                
                >
                    Quantidade: {data.quantity}
                </Text>

            </VStack>

            <VStack
                bg={"yellow.100"}
                space={1}
            >
                <TouchableOpacity

                    style={{
                        backgroundColor: "#00875F",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={handleToggleDone}
                >

                    {
                        !data.done
                            ?
                            <MaterialIcons name="done" size={24} color="white" />
                            :
                            <Ionicons name="return-up-back" size={24} color="white" />
                    }


                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        backgroundColor: "red",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={handleDeleteDocument}
                >
                    <MaterialIcons name="delete" size={24} color="white" />

                </TouchableOpacity>
            </VStack>
        </HStack>
    )
}