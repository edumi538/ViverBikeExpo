import { View, Text } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { StyleSheet } from "react-native";

export default function FormLogin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View>
      <FormInput
        labelName="Email"
        value={Email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName="Password"
        value={Password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title="login"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        // onPress={() => login(Email, Password)}
      />
      <FormButton
        title="Cadastrar"
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        // onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: { fontSize: 22 },
  navButtonText: { fontSize: 16 },
});
