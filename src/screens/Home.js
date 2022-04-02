import React, {useEffect, useContext, useState} from 'react'
import {View, Text, Button, FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Mode } from '../components/context'
export default function Home({navigation}) {
    const {log} = useContext(Mode)
    const [disease, setDisease] = useState([])
    useEffect(()=> {
        fetch('https://sandbox-healthservice.priaid.ch/issues?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impvc2hpZGVlcGFrMjAyNEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNTE4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTA0LTAxIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDg4NDkwMzgsIm5iZiI6MTY0ODg0MTgzOH0.0epAIyfjq_pOKWtupv43j9sZl1AbECDZo0njpQ8rQdg&format=json&language=en-gb')
        .then(res => res.json())
        .then(rep => setDisease(rep))
    },[])
    return (
        <View>
            <Text>Welcome to the Home Page</Text>
            <Button title='Settings' color={'blue'} onPress={()=> navigation.navigate('Settings')} />
            <FlatList 
            data = {disease}
            renderItem={({item})=> (
                <View style={{elevation: 5, margin:10}}>
                    <Text>{item.ID}</Text>
                    <Text>{item.Name}</Text>
                </View>
            )}
            />
        </View>
    )
}