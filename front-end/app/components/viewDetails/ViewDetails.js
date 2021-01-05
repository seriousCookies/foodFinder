import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import CheckBox from "expo-checkbox";
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
      shoppingListGroupName,
      subtitle,
      nutritionalContent,
      allergen,
    } = data.getProduct;
    let allergenCounter = 0;
    allergen.map((el) => {
      el.code === "KAN" || el.code === "JA"
        ? allergenCounter++
        : allergenCounter;
    });
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
          {allergenCounter > 0 ? (
            <AllergenItems allergen={allergen} />
          ) : (
            <Text style={styles.italicsSubtitle}>No declared Allergens</Text>
          )}
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.similarItemHeadingContainer}>
            <Text>
              Andre{" "}
              {shoppingListGroupName1
                ? shoppingListGroupName1
                : shoppingListGroupName}
              :
            </Text>
          </View>
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
        <View style={styles.SIContainer}>
          <SimilarItems
            GF={isGlutenFri}
            V={isVegan}
            group={
              shoppingListGroupName1
                ? shoppingListGroupName1
                : shoppingListGroupName
            }
            currItem={title + subtitle}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;
