/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('screen').height;

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userData, setUserData] = useState('');
  const [confirm, setConfirm] = useState(null);

  // const signIn = async () => {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber('+91' + number);
  //     setConfirm(confirmation);
  //     //   confirm && Alert.alert('OTP send to your mobile number');
  //   } catch (error) {
  //     console.log(error, 'error signIn');
  //   }
  // };

  // const verifyOTP = async () => {
  //   try {
  //     //   await confirm.confirm(otp);
  //     await AsyncStorage.setItem('isLogged', '1');
  //     setConfirm(null);
  //     navigation.navigate('BottomTab');
  //   } catch (error) {
  //     console.log(error, 'error');
  //   }
  // };

  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
      return;
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: name,
          });
          Alert.alert('Registration Successfull.');
          navigation.navigate('Login');
        });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* {!confirm ? (
        <View
          style={{
            height: 'auto',
            elevation: 8,
            width: height / 3,
            borderRadius: 10,
            backgroundColor: 'white',
            padding: 12,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', marginVertical: 10}}>
            Login
          </Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10}}
            value={number}
            keyboardType={'phone-pad'}
            onChangeText={setNumber}
            placeholder="Enter Mobile Number"
          />
          <TouchableOpacity
            onPress={signIn}
            style={{
              margin: 10,
              alignSelf: 'center',
              backgroundColor: 'blue',
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      ) : ( */}
      <View
        style={{
          height: 'auto',
          elevation: 8,
          width: height / 3,
          borderRadius: 10,
          backgroundColor: 'white',
          padding: 12,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', marginVertical: 10}}>
          Sign UP
        </Text>
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, margin: 8}}
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, margin: 8}}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, margin: 8}}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
        />
        <TouchableOpacity
          onPress={registerUser}
          style={{
            margin: 10,
            alignSelf: 'center',
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: '700', color: 'white'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {/* )} */}
    </View>
  );
};

export default SignUp;
