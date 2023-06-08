import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// CUSTOM IMPORTS
import ButtonsHOC from "../../components/button/ButtonHOC";
import SignupSignin from "../../components/button/Signup_Signin";
import UPcircles from "../../components/circles/UPcircles";
import styles from "./LoginStyle";
import { images } from "../../resources/images";

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // To get data from redux use --> useSelector
  const userData = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log("userData:", userData); // Adding the users
  }, []);

  const handleLogin = async () => {
    if (userId == "" || password == "") {
      alert("Please Enter your Username & Password");
      return;
    }

    // Password validation regex pattern
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return;
    }

    // Getted Data from redux checking the data is matching or not.
    if (
      userId == userData.userDetails.registerUsername &&
      password == userData.userDetails.regpassword
    )
      try {
        // User credentials match, perform login action
        await AsyncStorage.setItem("isLoggedIn", "true");
        // console.log("Login successful!");
        navigation.navigate("Dashboard");
      } catch (error) {
        console.error(error);
      }
    else {
      // User credentials do not match
      alert("Invalid username or password!");
      return;
    }
  };

  const handlesignUp = () => {
    navigation.navigate("Register");
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
          <Text style={styles.boldtext}> Welcome back </Text>

          <View>
            <Image
              source={images.backtoschool}
              style={styles.schoolImg}
              resizeMode="contain"
            />
          </View>

          {/* TEXT INPUT FIELDs */}
          <KeyboardAwareScrollView
            contentContainerStyle={styles.TextInputmain}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <TextInput
                style={styles.TextInput}
                placeholder="User ID"
                value={userId}
                onChangeText={(text) => setUserId(text)}
              />
              <TextInput
                style={styles.TextInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
              <Text style={styles.forgetpwd}>Forget password ?</Text>
              {/* HOC BUTTON */}
              <View style={styles.btn}>
                <ButtonsHOC text="Login" onPress={() => handleLogin()} />
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.textwords2}>
            <Text style={styles.accountstyle}>Don't have an account ?</Text>
            <Text style={styles.signin}>
              <SignupSignin text="Sign Up" onPress={() => handlesignUp()} />
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
