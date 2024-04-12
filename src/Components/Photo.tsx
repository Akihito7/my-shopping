import { Box, Image, Text } from "native-base"
import { TouchableOpacity } from "react-native";

type PropsPhoto = {
    title : string;
    uri?: string;
    onPress?: () => void;
}

export function Photo({ title, uri, onPress }: PropsPhoto) {
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
                                {title}
                            </Text>
                        </Box>
                    </TouchableOpacity>

                    :

                    <Image
                        h={56}
                        w="full"
                        source={{ uri }}
                        alt="foto do comprovante"
                        borderRadius={5}
                        resizeMethod="resize"

                    />
            }
        </>
    )
}