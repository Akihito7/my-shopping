import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { Receipts } from "../screens/Receipts";
import { Uploads } from "../screens/Uploads";
import { useTheme } from "native-base";

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { HStack, Text, VStack } from "native-base";

export function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();

    const { colors } = useTheme();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: colors.gray[100],
            tabBarActiveTintColor: colors.green[700],

            tabBarStyle: {
                backgroundColor: colors.gray[100],
                height: 76,
                borderTopWidth: 0,
                paddingBottom: 8,
                paddingTop: 8,
                borderTopStartRadius: 50,
                borderTopEndRadius: 50,
            }
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: (({ color }) => {
                        return (
                            <VStack
                                w={16}
                                h={16}
                                bg={color}
                                rounded="full"
                                alignItems="center"
                                justifyContent="center"
                            >

                                <AntDesign name="shoppingcart" size={24}
                                    color={color === colors.green[700] ? "white" : "black"} />

                                <Text
                                    fontSize="xs"
                                    color={color === colors.green[700] ? "white" : "black"}
                                >
                                    List
                                </Text>
                            </VStack>
                        )

                    })
                }}
            />
            <Screen
                name="receipts"
                component={Receipts}
                options={{
                    tabBarIcon: (({ color }) => {
                        return (
                            <VStack
                                w={16}
                                h={16}
                                bg={color}
                                rounded="full"
                                alignItems="center"
                                justifyContent="center"
                            >

                                <FontAwesome5 name="clipboard-list" size={24}
                                    color={color === colors.green[700] ? "white" : "black"} />

                                <Text
                                    fontSize="xs"
                                    color={color === colors.green[700] ? "white" : "black"}
                                >
                                    Receipts
                                </Text>



                            </VStack>
                        )

                    })
                }}
            />

            <Screen
                name="uploads"
                component={Uploads}
                options={{
                    tabBarIcon: (({ color }) => {
                        return (
                            <VStack
                                w={16}
                                h={16}
                                bg={color}
                                rounded="full"
                                alignItems="center"
                                justifyContent="center"
                            >

                                <Entypo name="upload-to-cloud" size={24}
                                    color={color === colors.green[700] ? "white" : "black"} />

                                <Text
                                    fontSize="xs"
                                    color={color === colors.green[700] ? "white" : "black"}
                                >
                                    Uploads
                                </Text>

                            </VStack>
                        )

                    })
                }}
            />
        </Navigator>
    )
}