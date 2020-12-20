import React from "react";
import { Text, View, SafeAreaView, FlatList, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../../api/queries/getproduct";
import { styles } from "./styles";
import { NCItems } from "./components/NCItems";
import { SimilarItems } from "./components/SimilarItems";
import { AllergenItems } from "./components/AllergenItems";

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
      shoppingListGroupName1,
      subtitle,
      nutritionalContent,
      allergen,
    } = data.getProduct;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.container}>
          <NCItems nutritionalContent={nutritionalContent} />
        </View>
        <Text>Inneholder:</Text>
        <AllergenItems allergen={allergen} />
        <Text>Similar alternatives:</Text>
        <SimilarItems group={shoppingListGroupName1} />
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;
