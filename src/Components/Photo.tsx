import { Box, Image, Text } from "native-base"
import { TouchableOpacity } from "react-native";

type PropsPhoto = {
    uri?: string;
    onPress: () => void;
}

export function Photo({ uri, onPress }: PropsPhoto) {
    return (
        <>
            {
                !uri ?
                    <TouchableOpacity onPress={onPress}>
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
                    </TouchableOpacity>

                    :

                    <Image
                        h={56}
                        w="full"
                        fontSize="xl"
                        textAlign="center"
                        source={{ uri }}
                        alt="foto do comprovante"
                        borderRadius={5}
                        resizeMethod="resize"

                    />
            }
        </>
    )
}