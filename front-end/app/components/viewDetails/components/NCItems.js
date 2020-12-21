import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import {
  rules,
  trafficColour,
  trafficColourLabel,
} from "../utils/trafficColours";

export const NCItems = ({ nutritionalContent, alternative }) => {
  const [toggleNCView, setToggleNCView] = useState(false);
  const onPress = () => {
    setToggleNCView(!toggleNCView);
  };
  if (nutritionalContent === null) {
    return <Text>No nutritional information provided</Text>;
  } else {
    const NCItem = ({ item }) => {
      const { displayName, amount, unit } = item;
      if (
        displayName === "Energi" ||
        displayName === "Fett" ||
        displayName === "Mettet fett" ||
        displayName === "Sukkerarter" ||
        displayName === "Salt"
      ) {
        const trafficColourStyle = trafficColour(displayName, amount, rules);
        const itemLabel = trafficColourLabel(
          trafficColourStyle.backgroundColor
        );
        if (alternative) {
          return (
            <View>
              <TouchableOpacity onPress={onPress}>
                <View style={trafficColourStyle || styles.nutritionalContent}>
                  <Text style={styles.ncNameText}>{displayName}</Text>
                  <Text style={styles.text}>
                    {displayName === "Energi" || toggleNCView
                      ? amount
                      : itemLabel}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
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
    const renderNCItem = ({ item }) => <NCItem item={item} />;
    return (
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.flatlistContainer}
          numColumns={5}
          renderItem={({ item }) => renderItem({ item })}
          data={nutritionalContent}
          renderItem={renderNCItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
};
