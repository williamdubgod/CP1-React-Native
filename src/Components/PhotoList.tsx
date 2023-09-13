import React from "react";
import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface PhotoListProps {
  data: { id: string; pathURL: any }[];
}

const PhotoList: React.FC<PhotoListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <LinearGradient
          colors={["#D52865", "#F7B55A"]}
          style={styles.storesCard}
        >
          <TouchableOpacity>
            <Image
              style={styles.storesCardImage}
              source={item.pathURL}
            />
          </TouchableOpacity>
        </LinearGradient>
      )}
    />
  );
};

const styles = StyleSheet.create({
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
    marginTop: 20
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
  },
  
});

export default PhotoList;
