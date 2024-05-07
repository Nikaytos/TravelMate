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
import SocialMediaSignInButtons from "../components/SocialMediaSignInButtons";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function SignIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    if (username === "admin" && password === "1234") {
      onSignIn();
    } else {
      console.warn("Wrong username or password");
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };
  const onSignInGooglePressed = () => {
    console.warn("Sign in with Google");
  };

  const onSignInApplePressed = () => {
    console.warn("Sign in with Apple");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
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
        <SocialMediaSignInButtons />
        <CustomButton
          text={"Forgot password?"}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text={"Don't have an account? Create one"}
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

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
