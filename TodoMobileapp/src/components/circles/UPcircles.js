import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const UPcircles = () => {
  return (
    <Image
         source={require('../../asset/circle.png')}
         style={Styles.circleImg}
         resizeMode="contain"
       />
  )
}

export default UPcircles

const Styles = StyleSheet.create({
  circleImg: {
      position: "absolute",
      zIndex:0,
      left:0,
},
});