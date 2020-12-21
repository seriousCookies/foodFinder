import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "../styles";

const AllergenItem = ({ item }) => {
  const { displayName, code } = item;
  if (code === "JA") {
    return (
      <View>
        <Text style={styles.allergentext}>{displayName}</Text>
      </View>
    );
  } else if (code === "KAN") {
    return (
      <View>
        <Text style={styles.kanAllergenText}>{displayName}</Text>
      </View>
    );
  }
  return null;
};

export const AllergenItems = ({ allergen }) => {
  const renderAllergenItem = ({ item }) => <AllergenItem item={item} />;
  return (
    <View style={styles.allergenContainer}>
      <Text>Inneholder: </Text>
      <FlatList
        contentContainerStyle={styles.allergenFlatlistContainer}
        numColumns={5}
        renderItem={({ allergenItem }) => renderItem({ allergenItem })}
        data={allergen}
        renderItem={renderAllergenItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
