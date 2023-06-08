import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//Custom Imports
import { colors } from "../../resources/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
  todoImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkingImg: {
    marginTop: hp("65%"),
    resizeMode: "contain",
    width: wp("70%"),
    height: hp("20%"),
    marginRight: wp("6%"),
  },
  bold: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("65%"),
  },
  boldText: {
    fontWeight: "bold",
    fontSize: wp("4.7%"),
  },
  textWords: {
    height: hp("40%"),
    width: wp("43%"),
    textAlign: "center",
    lineHeight: hp("2%"),
    fontSize: wp("3.3%"),
    marginTop: hp("2%"),
  },
  words: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 3,
    marginBottom: hp("5%"),
  },
});

export default styles;
