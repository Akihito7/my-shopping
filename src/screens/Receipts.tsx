import { useEffect, useState } from "react";
import { FlatList, HStack, Heading, Input, Text, VStack } from "native-base";
import { getStorage, ref, listAll } from "firebase/storage";
import { ReceiptCard } from "../Components/ReceiptCard";


type PropsReceipts = {
    name: string;
    path: string;
}

export function Receipts() {

    const [receipts, setReceipts] = useState<PropsReceipts[]>([]);

    useEffect(() => {

        const storage = getStorage();
        const storageRef = ref(storage, "images/")

        listAll(storageRef).then(listFiles => {
            const files: PropsReceipts[] = [];

            listFiles.items.forEach(file => {
                files.push({
                    name: file.name,
                    path: file.fullPath,
                })
            })

            setReceipts(files)
            console.log(files)
        })
    }, [])

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

            <FlatList
                data={receipts}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <ReceiptCard data={item} />
                )}

                px={4}
                mb={4}
            />

        </VStack >
    )
}