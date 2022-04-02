
import React, {useRef, useState,useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Mode } from '../components/context';

const VerificationScreen = ({navigation}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  const [err, setErr] = useState(false)
  const [load, setLoad] = useState(false)
  const [num, setNum] = useState(1000+Math.floor(Math.random()*9000))
  const {log,setLog} = useContext(Mode)
  useEffect(()=> {
    function genOTP(){
    setNum(1000+Math.floor(Math.random()*9000))
    }
    return () => {
      genOTP()
    }
  },[])
  const verifyOtp = () => {
    const data = otp[1]+otp[2]+otp[3]+otp[4]
    if(data.length !== 4 || data !== num.toString()){
      setErr(true)
      setTimeout(()=> {
        setLoad(e => !e)
      },2000)
      setLoad(true)
      setLog('logout')
    }
    else{
    setErr(false)
    setOtp({1: '', 2: '', 3: '', 4: ''})
    setTimeout(()=> {
      setLoad(e => !e)
      navigation.navigate('Home')
    },5000)
    setLoad(true)
    setLog('logged')
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor='white'
        translucent
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.content}>
        Enter the OTP {num} just sent to you at{' '}
        <Text style={styles.phoneNumberText}>9876541244</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
            value={otp[1]}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
            value={otp[2]}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
            value={otp[3]}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
            value={otp[4]}
            
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => verifyOtp()}>
        <Text style={styles.signinButtonText}>Verify</Text>
      </TouchableOpacity>
      {load ? (
        <ActivityIndicator size={'large'} color={'green'}/>
      )
      :
      <View></View>
    }
    {
      err && !load ? (
        <Text style={{color:'red'}}>Please enter correct OTP</Text>
      ):
      <Text></Text>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf:'center'
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    color: 'black',
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'white'
  },
});

export default VerificationScreen;