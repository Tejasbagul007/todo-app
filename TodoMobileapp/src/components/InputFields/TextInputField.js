import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

const TextInput = ({ value, onChangeText }) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      // Additional props for styling, placeholder, etc.
    />
  );
};

export default TextInput;
