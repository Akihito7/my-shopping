import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app.routes"
import { Box } from "native-base"

export function Routes() {
    return (
       
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
      
    )
}