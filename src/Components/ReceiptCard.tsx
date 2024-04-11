import { HStack, Heading, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


type PropsCardItem = {
    name: string;
    path: string;
}

export function ReceiptCard({ data }: { data: PropsCardItem }) {

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
                        backgroundColor: "#00875F",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}

                >
                    <MaterialIcons name="done" size={24} color="white" />

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

                >
                    <MaterialIcons name="delete" size={24} color="white" />

                </TouchableOpacity>
            </VStack>
        </HStack>
    )
}