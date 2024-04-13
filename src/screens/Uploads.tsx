import { useState } from "react";
import { Button, HStack, Heading, Text, VStack } from "native-base";
import { Photo } from "../Components/Photo";
import * as ImagePicker from 'expo-image-picker';


import { getStorage, ref, uploadBytesResumable, getMetadata, uploadString, updateMetadata, getDownloadURL } from "firebase/storage";
import { Alert } from "react-native";

export function Uploads() {

    const [image, setImage] = useState("");
    const [bytesTransfered, setBytesTransfered] = useState("")
    const [progress, setProgress] = useState(0)

    async function handleSetImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) setImage(result.assets[0].uri);

    }

    async function handleUploadPhoto() {

        const MIME = image.match(/\.(?:.(?!\.))+$/);

        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + new Date().getTime() + MIME);
        const response = await fetch(image);
        const blob = await response.blob();
        const uploadTask = uploadBytesResumable(storageRef, blob);


        uploadTask.on('state_changed', (snapshot) => {
            const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
            setProgress(Number(progress));
            setBytesTransfered(`${snapshot.bytesTransferred} de ${snapshot.totalBytes} bytes transferidos`)

            if (snapshot.bytesTransferred === snapshot.totalBytes) {

                Alert.alert("Upload concluído")
                setImage("")
                setProgress(0)
                setBytesTransfered("")
            }
        })

        uploadTask.then(async () => {
       
            const downloadURL = await getDownloadURL(storageRef);

            const metadata = await getMetadata(storageRef);
        
            metadata.customMetadata = {
                imageURL: downloadURL
            };

            await updateMetadata(storageRef, metadata);
        })



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
                <Heading color="white">Uploads</Heading>
            </HStack>

            <VStack px={10} mt={8}>

                <Photo uri={image} onPress={handleSetImage} title="Clique aqui para adicionar uma foto." />

                <Button

                    h={16}
                    bg="green.700"
                    mt={4}
                    onPress={handleUploadPhoto}
                >
                    <Heading color="white" fontSize="lg">Fazer upload</Heading>

                </Button>

                <Heading textAlign="center" color="gray.400" fontSize="5xl" mt={12}>
                    {progress}%
                </Heading>
                <Text textAlign="center" color="gray.400" >{bytesTransfered}</Text>
            </VStack>


        </VStack >
    )
}