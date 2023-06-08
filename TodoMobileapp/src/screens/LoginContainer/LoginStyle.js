import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// CUSTOM IMPORTS
import { colors } from "../../resources/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
  boldText: {
    flex: 1,
    marginTop: hp("20%"),
    width: wp("53%"),
    fontWeight: "bold",
    fontSize: wp("4.8%"),
    left: wp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 45,
    padding: 10,
    color: colors.black,
    alignItems: "center",
  },
  schoolImg: {
    marginTop: hp("4%"),
    resizeMode: "contain",
    width: wp("50%"),
    height: hp("20%"),
    marginRight: wp("6%"),
  },
  textInputmain: {
    flex: 1,
    marginTop: hp("5%"),
  },

  textWords2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  accountStyle: {
    marginBottom: hp("0.5%"),
  },

  forgetPwd: {
    color: colors.aqua,
    marginLeft: wp("4%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: wp("6%"),
  },
  btn: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2.6%"),
    marginBottom: hp("0.5%"),
  },
});

export default styles;
