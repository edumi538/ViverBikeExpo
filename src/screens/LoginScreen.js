import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import LogFacebook from "../services/authenticationService/FacebookService";

export default function LoginScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Title>Bem vindo ao Viver Bike</Title>
      <Text>Deseja Logar com o Facebook?</Text>
      <LogFacebook />
    </View>
  );
}
