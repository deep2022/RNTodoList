import React, {useContext, useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import { Mode } from '../components/context'
export default function Settings({navigation}) {
    const {log, setLog} = useContext(Mode)
    return (
        <View>
            <Text>Welcome to the Settings Page</Text>
            <Button title= {'LOGOUT'} onPress={()=> setLog('logout')}/>
        </View>
    )
}