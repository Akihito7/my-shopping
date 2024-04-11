import { Box, Image, Text } from "native-base"

type PropsPhoto = {
    uri?: string;
}

export function Photo({ uri }: PropsPhoto) {
    return (
        <>
            {
                !uri ?
                    <Box
                        borderColor="gray.300"
                        borderWidth={3}
                        borderStyle="dashed"
                        borderRadius={5}
                        h={56}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text
                            fontSize="xl"
                            color="gray.400"
                            textAlign="center"
                        >
                            Clique aqui para adicionar uma foto.
                        </Text>
                    </Box>

                    :

                    <Image
                        h={56}
                        w="full"
                        fontSize="xl"
                        textAlign="center"
                        source={{ uri }}
                        borderRadius={5}
                        resizeMethod="resize"

                    />
            }
        </>
    )
}