import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export const AllergenItem = ({ item }) => {
  const { displayName, code } = item;
  if (code === "JA") {
    return (
      <View>
        <Text style={styles.allergentext}>{displayName}</Text>
      </View>
    );
  }
  return null;
};
