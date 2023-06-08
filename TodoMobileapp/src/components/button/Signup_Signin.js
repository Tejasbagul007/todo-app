import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../resources/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SignupSignin = ({ text, onPress }) => {
  return (
    <View>
    <TouchableOpacity onPress={onPress} >
        <Text style={Styles.btnsignIn}>{text}</Text>
      </TouchableOpacity>
   </View>
  )
}

export default SignupSignin


const Styles = StyleSheet.create({
    btnsignIn: {
      // flex: 1,
      color: colors.aqua,
      left: wp('3%'),
      marginTop: hp('0%'),
    },
  });
  