import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaSignInButtons from "../../components/SocialMediaSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("Register");
  };
  const onTermsOfUsePressed = () => {
    console.warn("TermsOfUse");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("PrivacyPolicy");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={"Repeat Password"}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text={"Register"} onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By regestering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialMediaSignInButtons />
        <CustomButton
          text={"Do you have an account? Login"}
          type="TERTIARY"
          onPress={onSignInPressed}
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
  link: {
    color: "#FDB075",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
  },
  text: { color: "gray", marginVertical: 10 },
});

export default SignUp;
