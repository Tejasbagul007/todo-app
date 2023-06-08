import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// CUSTOM IMPORTS
import { colors } from "../../resources/colors";


const RNTextInput = ({ value, onChangeText, placeholder,secureTextEntry }) => {
  return (
    <TextInput
     style={styles.TextInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default RNTextInput;


const styles = StyleSheet.create({
  
  TextInput: {
    width: wp("84%"),
    padding: hp("2%"),
    marginBottom: hp("2.4%"),
    alignItems: "center",
    color: colors.black,
    borderRadius: wp("6%"),
    backgroundColor: colors.white,
  },
});

