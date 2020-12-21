import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../../api/queries/getproduct";
import { styles } from "./styles";
import { NCItems } from "./components/NCItems";
import { SimilarItems } from "./components/SimilarItems";
import { AllergenItems } from "./components/AllergenItems";

const ViewDetails = ({ barcode }) => {
  const [isGlutenFri, setIsGlutenFri] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
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
        <View style={styles.NCContainer}>
          <NCItems nutritionalContent={nutritionalContent} />
        </View>
        <View style={styles.alContainer}>
          <AllergenItems allergen={allergen} />
        </View>
        <Text>Andre {shoppingListGroupName1}:</Text>
        <View style={styles.filterContainer}>
          <CheckBox
            value={isGlutenFri}
            onValueChange={setIsGlutenFri}
            style={styles.checkbox}
          />
          <Text style={styles.label}>glutenfri</Text>
          <CheckBox
            value={isVegan}
            onValueChange={setIsVegan}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Vegan</Text>
        </View>
        <SimilarItems
          GF={isGlutenFri}
          V={isVegan}
          group={shoppingListGroupName1}
          currItem={title + subtitle}
        />
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;
