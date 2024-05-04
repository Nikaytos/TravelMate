import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

const SocialMediaSignInButtons = () => {
  const onSignInGooglePressed = () => {
    console.warn("Sign in with Google");
  };
  const onSignInFacebookPressed = () => {
    console.warn("Sign in with Facebook");
  };

  const onSignInApplePressed = () => {
    console.warn("Sign in with Apple");
  };
  return (
    <>
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
    </>
  );
};

export default SocialMediaSignInButtons;
