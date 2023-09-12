import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const StoreCard = ({ id, pathURL }) => {
  return (
    <LinearGradient
      colors={["#D52865", "#F7B55A"]}
      style={styles.storesCard}
      key={id}
    >
      <TouchableOpacity>
        <Image style={styles.storesCardImage} source={pathURL} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = {
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
  },
};

export default StoreCard;
