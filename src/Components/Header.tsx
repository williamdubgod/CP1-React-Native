import React from "react";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Logo from "../assets/logo.svg";
import Stroke from "../assets/stroke.svg";
import Message from "../assets/message.svg";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Logo width={127} height={49} />
      <View style={styles.headerOptions}>
        <TouchableOpacity onPress={() => {
            Alert.alert('Você clicou no ícone de notificações');
          }}>
            <Stroke />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            Alert.alert('Você clicou no ícone de mensagens');
          }}>
            <Message />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
    marginBottom: 15
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
});

export default Header;
