import React, {createContext, useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Mode = createContext();
const ModeProvider = (props) => {
    const [log, setLog] = useState('logout')
    useEffect(()=> {
        async function fetch(){
            const j = await AsyncStorage.getItem('token')
            console.log(j)
            if(j !== null && j=== 'logged'){
                setLog('logged')
            }
        }
        fetch()
    },[])
    useEffect(()=> {
        async function token(){
            try{
            await AsyncStorage.setItem('token',log)
            }
            catch{
                console.log('error')
            }
        }
        token()
    },[log])
    return(
            <Mode.Provider value = {{log, setLog}}>
                {props.children}
            </Mode.Provider>
    )
}
export {Mode, ModeProvider}