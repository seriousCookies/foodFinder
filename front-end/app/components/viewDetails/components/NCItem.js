import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import {
  rules,
  trafficColour,
  trafficColourLabel,
} from "../utils/trafficColours";

export const NCItem = ({ item }) => {
  const { displayName, amount, unit } = item;
  if (
    displayName === "Energi" ||
    displayName === "Fett" ||
    displayName === "Mettet fett" ||
    displayName === "Sukkerarter" ||
    displayName === "Salt"
  ) {
    const trafficColourStyle = trafficColour(displayName, amount, rules);
    const itemLabel = trafficColourLabel(trafficColourStyle.backgroundColor);
    return (
      <View>
        <View style={trafficColourStyle || styles.nutritionalContent}>
          <Text style={styles.ncNameText}>{displayName}</Text>
          <Text style={styles.amountText}>
            {amount}
            {unit}
          </Text>
          <Text style={styles.text}>{itemLabel}</Text>
        </View>
      </View>
    );
  }
  return null;
};
