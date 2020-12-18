import React from "react";
import { Text, View, SafeAreaView, FlatList, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../../api/queries/getproduct";
import { styles } from "./styles";
import { NCItem } from "./components/NCItem";
import { AllergenItem } from "./components/AllergenItem";

const ViewDetails = ({ barcode }) => {
  const searchVar = barcode.barcode;
  const { data, error, loading } = useQuery(DATA_QUERY, {
    variables: { search: searchVar },
  });
  if (loading) {
    return <AppLoading />;
  }
  if (error) {
    return <Text>This item is not found</Text>;
  }
  if (data !== undefined) {
    const {
      title,
      ingredients,
      weight,
      nutritionalContent,
      allergen,
    } = data.getProduct;

    const renderNCItem = ({ item }) => <NCItem item={item} />;
    const renderAllergenItem = ({ item }) => <AllergenItem item={item} />;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            style={styles.flatlist}
            contentContainerStyle={styles.flatlistContainer}
            numColumns={5}
            renderItem={({ item }) => renderItem({ item })}
            data={nutritionalContent}
            renderItem={renderNCItem}
            keyExtractor={(item) => item.name}
          />
        </View>
        <Text>Ingredients: {ingredients}</Text>
        <Text>Inneholder:</Text>
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
        <Text>Hello There</Text>
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;
