import React from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "../styles";

export const AllergenItems = ({ allergen }) => {
  const renderAllergenItem = ({ item }) => <AllergenItem item={item} />;
  const AllergenItem = ({ item }) => {
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

  return (
    <View style={styles.allergenContainer}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        numColumns={5}
        renderItem={({ allergenItem }) => renderItem({ allergenItem })}
        data={allergen}
        renderItem={renderAllergenItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
