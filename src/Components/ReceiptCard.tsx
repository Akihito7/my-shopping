import { HStack, Heading, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


type PropsCardItem = {
    data: {
        name: string;
        path: string;
    }
    onShow: (path: string) => void;
    handleDelete : (path : string) => void;
}

export function ReceiptCard({ data, onShow, handleDelete }: PropsCardItem) {

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
                    isTruncated
                    textTransform="lowercase"
                >
                    {data.name}
                </Heading>

                <Text

                >
                    {data.path}
                </Text>

            </VStack>

            <VStack
                bg={"yellow.100"}
                space={1}
            >
                <TouchableOpacity

                    style={{
                        backgroundColor: "red",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"

                    
                    }}

                    onPress={() => handleDelete(data.path)}

                >
                    <MaterialIcons name="delete" size={24} color="white" />
                    

                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        backgroundColor: "#00875F",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}

                    onPress={() => onShow(data.path)}

                >
                    
                    <AntDesign name="eye" size={24} color="white" />

                </TouchableOpacity>
            </VStack>
        </HStack>
    )
}