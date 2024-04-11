import { useState } from "react";
import { Button, HStack, Heading, Image, Input, ScrollView, Text, VStack } from "native-base";
import { CardItem } from "../Components/CardItem";
import { Photo } from "../Components/Photo";

export function Uploads() {

    const [image, setImage] = useState("");

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

                <Photo uri={image}/>

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