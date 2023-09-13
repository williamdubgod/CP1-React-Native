import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../assets/logo.svg";
import Stroke from "../assets/stroke.svg";
import Message from "../assets/message.svg";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Logo width={127} height={49} />
      <View style={styles.headerOptions}>
        <TouchableOpacity>
          <Stroke />
        </TouchableOpacity>
        <TouchableOpacity>
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
    marginTop: 20,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
});

export default Header;
