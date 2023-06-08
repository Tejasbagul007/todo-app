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
    backgroundColor: colors.lightGray,
  },
  bold: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("13%"),
  },
  textWords: {
    width: wp("45%"),
    left: wp("1%"),
    textAlign: "center",
    fontSize: wp("3.4%"),
    marginVertical: hp("1%"),
    marginBottom: hp("1%"),
    marginTop: hp("3%"),
  },
  textWords2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  accountStyle: {
    marginBottom: hp("0.5%"),
  },
  boldText: {
    marginTop: hp("10%"),
    width: wp("50%"),
    fontWeight: "bold",
    fontSize: wp("4.8%"),
  },
  textInputmain: {
    alignSelf: "center",
    marginTop: hp("6%"),
    marginBottom: hp("2%"),
  },

  btn: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("0.5%"),
  },
});

export default styles;
