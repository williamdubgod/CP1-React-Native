import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Logo, Stroke, Message } from "./Icons";

const Header = () => {
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

const styles = {
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
};

export default Header;
