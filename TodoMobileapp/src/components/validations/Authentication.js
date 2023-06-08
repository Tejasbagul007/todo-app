import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';


export const Authentication = ({ navigation }) => {

  useEffect(() => {
    // Check if the user is already logged in
    // used for rendering sideEffects
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value === 'true') {
        navigation.navigate('Dashboard');
      }
      else{
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      return
    }
  };
  return (
   <View/>
  );
};

