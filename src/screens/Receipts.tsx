import { useEffect, useState } from "react";
import { FlatList, HStack, Heading, Input, Text, VStack } from "native-base";
import { getDownloadURL, getStorage, ref, listAll, deleteObject } from "firebase/storage";
import { ReceiptCard } from "../Components/ReceiptCard";
import { Photo } from "../Components/Photo";
import { Alert } from "react-native";
import { storage } from "../configs/firebaseConfig";



type PropsReceipts = {
    name: string;
    path: string;
}

export function Receipts() {

    const [receipts, setReceipts] = useState<PropsReceipts[]>([]);
    const [photoSelected, setPhotoSelected] = useState("");

    async function handlePhotoSelected(path: string) {

        const storage = getStorage();
        const storageRef = ref(storage, path)

        try {
            const url = await getDownloadURL(storageRef);
            setPhotoSelected(url)

        } catch (error) {
            console.error(error)
        }
    }

    async function handleDelete(path: string) {

        const storageRef = ref(storage, path)

        try {
            await deleteObject(storageRef);
            Alert.alert("arquivo excluido com sucesso")
            fetchReceipts()
        } catch (error) {
            console.error("Erro ao excluir a foto:", error);
        }
    }

    async function fetchReceipts() {

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
        })
    }



    useEffect(() => {
        fetchReceipts()
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
                <Photo uri={photoSelected} title="Selecione um comprovante para ve-lo aqui" />
                <Text textAlign="center" mt={2} mb={2} color="gray.400">Informações da foto</Text>
            </VStack>

            <FlatList
                data={receipts}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <ReceiptCard
                        data={item}
                        onShow={handlePhotoSelected}
                        handleDelete={handleDelete}
                    />
                )}

                px={4}
                mb={4}
            />

        </VStack >
    )
}