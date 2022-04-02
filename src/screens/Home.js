import React, {useEffect, useContext, useState} from 'react'
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import { Mode } from '../components/context'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'
export default function Home({navigation}) {
    const {log} = useContext(Mode)
    const [disease, setDisease] = useState([])
    const[symptoms, setSymptoms] = useState([])
    const [foundDisease, setFoundDisease] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(()=> {
        fetch('https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impvc2hpZGVlcGFrMjAyNEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNTE4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTA0LTAxIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDg4Nzc0NDksIm5iZiI6MTY0ODg3MDI0OX0.MFz7XcIRT0xtGGvBHoiD1LtGJykYfaT4lvDC0fgKLqE&format=json&language=en-gb')
        .then(res => res.json())
        .then(rep => setDisease(rep))
    },[])
    function check(){
        const get = symptoms.map(a => a.ID)
        console.log(get,'server')
        fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${get}]&gender=male&year_of_birth=1990&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impvc2hpZGVlcGFrMjAyNEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNTE4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTA0LTAxIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDg4Nzc0NDksIm5iZiI6MTY0ODg3MDI0OX0.MFz7XcIRT0xtGGvBHoiD1LtGJykYfaT4lvDC0fgKLqE&format=json&language=en-gb`)
        .then(res => res.json())
        .then(req => setFoundDisease(req))
    }
    console.log(symptoms,'symptoms')
    console.log(disease)
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <Icon style={{marginLeft:'90%'}} name='settings' size={30} onPress={()=> navigation.navigate('Settings')} />
            <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold', color:'black'}}>Welcome to the Symptoms tracker Page</Text>
            <TouchableOpacity style={{backgroundColor:'black',width:'30%',padding:10,marginVertical:30, alignSelf:'center',borderRadius:50}} onPress={()=> setOpen(true)}>
                <Text style={{textAlign:'center',color:'white'}}>Add symptoms</Text>
            </TouchableOpacity>
            <Modal isVisible={open} style={{backgroundColor:'white'}}>
                <View style={{flex:1}}>
                <FlatList
                data = {disease}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={()=> (setSymptoms(symptoms.concat(item)), setOpen(false))}>
                        <Text>{item.Name}</Text>
                    </TouchableOpacity>
                )}
                />
                </View>
            </Modal>
            {
                symptoms.length !== 0 ? (
                    <View>
                    <FlatList 
                    data = {symptoms}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item})=> 
                        <Text style={{padding:10}}>{item.Name}</Text>
                    }
                    />
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'black',width:'30%',padding:10,marginHorizontal:20,marginVertical:30, alignSelf:'center',borderRadius:50}} onPress={()=> check()}>
                        <Text style={{color:'white',textAlign:'center'}}>Check</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'black',width:'30%',padding:10,marginVertical:30, alignSelf:'center',borderRadius:50}} onPress={()=> setSymptoms([])}>
                        <Text style={{color:'white',textAlign:'center'}}>Clear Data</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    )
                :
                <Text style={{textAlign:'center'}}>No symptoms to show</Text>
            }
            {
                foundDisease.length !== 0 ? (
                    <View>
                    <Text style={{textAlign:'center'}}>You may have following Issues</Text>
                    <FlatList 
                    data = {foundDisease}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item})=> 
                        <Text style={{padding:10}}>{item.Issue.Name} {item.Issue.Accuracy}%</Text>
                    }
                    />
                    </View> 
                )
                    :
                    <Text style={{textAlign:'center'}}>No records found</Text>

            }
        </View>
    )
}