/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  const onLoad = () => {
    setTimeout(async () => {
      const isLogged = await AsyncStorage.getItem('isLogged');
      if (isLogged) {
        navigation.navigate('BottomTab');
      } else {
        navigation.navigate('Login');
      }
    });
  };

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Welcome to Authentication App</Text>
    </View>
  );
};

export default Splash;
