import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../assets/images/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };
  const onSignInGooglePressed = () => {
    console.warn("Sign in with Google");
  };
  const onSignInFacebookPressed = () => {
    console.warn("Sign in with Facebook");
  };

  const onSignInApplePressed = () => {
    console.warn("Sign in with Apple");
  };

  const onSignUpPressed = () => {
    console.warn("Sign up");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text={"Sign In"} onPress={onSignInPressed} />
        <CustomButton
          text={"Forgot password?"}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text={"Sign In with Google"}
          onPress={onSignInGooglePressed}
          bgColor="#FA9E"
          fgColor="#DD4D44"
        />
        <CustomButton
          text={"Sign In with Facebook"}
          onPress={onSignInFacebookPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text={"Sign In with Apple"}
          onPress={onSignInApplePressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text={"Don't have an account? Create one"}
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 500,
  },
});

export default SignIn;
