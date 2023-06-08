import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// CUSTOM IMPORTS
import ButtonsHOC from "../../components/button/ButtonHOC";
import SignupSignin from "../../components/button/Signup_Signin";
import UPcircles from "../../components/circles/UPcircles";
import styles from "./RegisterStyle";
import { setUser } from "../../redux/action";
import {
  passwordRegex,
  emailRegex,
} from "../../components/validations/constants";
import RNTextInput from "../../components/InputFields/TextInputField";

const RegisterScreen = (props) => {
  const dispatch = useDispatch();
  const [registerUsername, setregisterUsername] = useState("");
  const [regpassword, setregpassword] = useState("");
  const [regconfirmpassword, setconfirmPassword] = useState("");
  const [regemail, setEmail] = useState("");

  const handleRegister = () => {
    if (registerUsername == "" || regpassword == "" || regemail == "") {
      alert("Please Enter your Username, Email & Password");
      return;
    }

    if (!emailRegex.test(regemail)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(regpassword)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return;
    }

    // check regpassword and regconfirmpassword are equal or not
    if (regpassword !== regconfirmpassword) {
      alert("Passwords do not match");
      return;
    }

    // Dispatch the data to redux (reducer) that user submitted in Registration form
    const user = { registerUsername, regpassword, regemail };
    dispatch(setUser(user));

    // Clear the registration form fields
    setregisterUsername("");
    setregpassword("");
    setconfirmPassword("");
    setEmail("");

    props.navigation.navigate("Login", {
      registerUsername,
      regpassword,
    });
  };

  const handleSignIn = () => {
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <UPcircles />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.bold}>
            <Text style={styles.boldText}>Welcome to Onboard! </Text>
            <Text style={styles.textWords}>
              Let’s help to meet up your tasks.
            </Text>
          </View>

          {/* Text Input Fields */}
          <KeyboardAwareScrollView
            contentContainerStyle={styles.textInputmain}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <RNTextInput
                value={registerUsername}
                onChangeText={(text) => setregisterUsername(text)}
                placeholder="Enter your full name"
              />
              <RNTextInput
                value={regemail}
                onChangeText={setEmail}
                placeholder="Enter Your Email"
              />
              <RNTextInput
                value={regpassword}
                onChangeText={(text) => setregpassword(text)}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
              <RNTextInput
                value={regconfirmpassword}
                onChangeText={setconfirmPassword}
                secureTextEntry={true}
                placeholder="Confirm Password"
              />
              {/* HOC Button */}
              <View style={styles.btn}>
                <ButtonsHOC text="Register" onPress={() => handleRegister()} />
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.textWords2}>
            <Text style={styles.accountStyle}>Already have an account ?</Text>
            <Text>
              <SignupSignin text="Sign In" onPress={() => handleSignIn()} />
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
