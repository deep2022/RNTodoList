import React, {useContext} from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Auth from '../screens/Auth'
import { Mode } from '../components/context';

const Stack = createStackNavigator()

const AuthStackContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Auth" component={Auth} />
        </Stack.Navigator>
    )
}
const MainStackContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}
const AppContainer = () => {
    const {log} = useContext(Mode)
    return(
        <NavigationContainer>
         { log==='logged' ?  <MainStackContainer/> :<AuthStackContainer />}   
        </NavigationContainer>
    )
}

export default AppContainer