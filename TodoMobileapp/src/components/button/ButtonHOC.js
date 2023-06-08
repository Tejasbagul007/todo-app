import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../../resources/colors";

const windowWidth = Dimensions.get("window").width;
const buttonWidth = windowWidth * 0.8;

const ButtonsHOC = ({ text, onPress }) => {
  return (
    <View style={styles.mainBtn}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, { width: buttonWidth }]}
      >
        <View>
          <Text style={styles.btnTextColor}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsHOC;

const styles = StyleSheet.create({
  mainBtn: {
    marginBottom: hp("3%"),

  },
  btn: {
    width: wp("80%"),
    padding: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp("0.1%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.aqua,
  },
  btnTextColor: {
    color: colors.white,
    fontWeight: "bold",
    letterSpacing: wp("0.2%"),
  },
});
