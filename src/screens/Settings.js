import React, {useContext, useEffect} from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import { Mode } from '../components/context'
export default function Settings({navigation}) {
    const {log, setLog} = useContext(Mode)
    return (
        <View>
            <Text>Welcome to the Settings Page</Text>
            <TouchableOpacity style={{backgroundColor:'black',width:'30%',padding:10,marginVertical:30, alignSelf:'center',borderRadius:50}} onPress={()=> setLog('logout')}>
                <Text style={{color:'white',textAlign:'center'}}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}