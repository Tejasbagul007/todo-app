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

  rectangleWrapper: {
    flexDirection: "column",
    alignItems: "center",
    width: wp("100%"),
    height: hp("35%"),
    backgroundColor: colors.aqua,
  },

  circle: {
    flex: 1,
    marginRight: wp("52%"),
    marginBottom: hp("8%"),
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("4%"),
  },
  welcomeText: {
    marginBottom: hp("2%"),
  },
  boldText: {
    fontWeight: "bold",
    fontSize: wp("4.7%"),
    color: colors.white,
  },

  goodAfternoonStyle: {
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
    marginLeft: wp("65%"),
  },

  boldText2: {
    fontWeight: "bold",
    fontSize: wp("3.4%"),
    color: colors.black,
  },

  taskList: {
    marginRight: wp("75%"),
  },
  boldText3: {
    marginBottom: hp("1%"),
    marginTop: hp("2%"),
    fontWeight: "bold",
    fontSize: wp("3.4%"),
    color: colors.black,
  },

  box: {
    height: hp("33%"),
    marginBottom: hp("12%"),
    width: wp("89%"),
    marginLeft: wp("5%"),
    borderRadius: wp("3%"),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: wp("0%"), height: hp("0.3%") },
    shadowOpacity: wp("0.1%"),
    shadowRadius: wp("1%"),
    // elevation: 4, // For Android
  },
  textDaily: {
    marginTop: hp("2%"),
    marginLeft: wp("6%"),
  },
  plusMain: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: wp("72%"),
  },
  // ------------------------------Todo List-------------------------------
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: wp("80%"),
    padding: wp("4.5%"),
    backgroundColor: colors.white,
  },
  input: {
    width: wp("70%"),
    height: hp("6%"),
    padding: wp("3.5%"),
    borderWidth: wp("0.2%"),
    borderColor: colors.black,
  },
  addButton: {
    width: wp("70%"),
    height: hp("5%"),
    marginTop: hp("1%"),
    backgroundColor: colors.dodgerBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: colors.white,
    fontSize: wp("4%"),
    flexWrap: "wrap",
  },
  closeButton: {
    width: wp("70%"),
    height: hp("5%"),
    marginTop: hp("1%"),
    backgroundColor: colors.faintGrey,
    justifyContent: "center",
    alignItems: "center",
  },

  closeButtonText: {
    color: colors.white,
    fontSize: wp("4%"),
  },

  todo: {
    flexDirection: "row",
    marginRight: wp("11%"),
    marginLeft: wp("7%"),
    flexWrap: "wrap",
  },

  sideContent: {
    flex: 1,
    flexDirection: "column",
  },

  deleteText: {
    color: "red",
    marginBottom: hp("1%"),
    flexWrap: "wrap",
  },

  completedText: {
    textDecorationLine: "line-through",
    overflow: "scroll",
  },

  checkBox: {
    width: wp("5.2%"),
    height: hp("2.4%"),
    marginRight: wp("1.2%"),
    borderWidth: wp("0.6%"),
    borderColor: colors.black,
  },

  smallBox: {
    width: wp("12%"),
    marginBottom: hp("3.6%"),
    overflow: "scroll",
  },

  boxText: {
    flex: 1,
    position: "absolute",
    marginLeft: wp("2%"),
    width: wp("50%"),
    overflow: "scroll",
  },
  boxTextWrapper: {
    flex: 1,
    flexWrap: "wrap",
  },
  clock: {
    flex: 1,
    alignItems: "center",
    marginBottom: hp("2%"),
  },

  logoutText: {
    color: colors.teal, // Customize the color
    fontSize: wp("4%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default styles;
