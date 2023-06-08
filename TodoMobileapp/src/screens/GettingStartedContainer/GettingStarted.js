import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

//Custom Imports
import styles from "./GettingStartedStyle";
import ButtonsHOC from "../../components/button/ButtonHOC";
import UPcircles from "../../components/circles/UPcircles";
import { images } from "../../resources/images";

const GettingStarted = ({ navigation }, props) => {
  const handlegettingStarted = (props) => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <UPcircles />

      <View style={styles.todoImg}>
        <Image
          source={images.todoCheck}
          style={styles.checkingImg}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bold}>
        <Text style={styles.boldText}>Gets things with TODs</Text>
        <Text style={styles.textWords}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>
      </View>
      <View style={styles.btn}>
        <ButtonsHOC
          text="Getting Started"
          onPress={() => handlegettingStarted()}
        />
      </View>
    </SafeAreaView>
  );
};

export default GettingStarted;
