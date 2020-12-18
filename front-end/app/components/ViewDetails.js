import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../api/queries/getproduct";
const Item = ({ item }) => {
  const { displayName, amount, unit } = item;
  console.log(displayName);
  if (
    displayName === "Energi" ||
    displayName === "Fett" ||
    displayName === "Mettet fett" ||
    displayName === "Sukkerarter" ||
    displayName === "Salt"
  ) {
    const trafficColour = (displayName, amount) => {
      if (displayName === "Fett") {
        return amount <= 3
          ? styles.trafficColourGreen
          : amount <= 17.5
          ? styles.trafficColourYellow
          : styles.trafficColourRed;
      }
      if (displayName === "Mettet fett") {
        return amount <= 1.5
          ? styles.trafficColourGreen
          : amount <= 5
          ? styles.trafficColourYellow
          : styles.trafficColourRed;
      }
      if (displayName === "Sukkerarter") {
        return amount <= 5
          ? styles.trafficColourGreen
          : amount <= 22.5
          ? styles.trafficColourYellow
          : styles.trafficColourRed;
      }
      if (displayName === "Salt") {
        return amount <= 0.3
          ? styles.trafficColourGreen
          : amount <= 1.5
          ? styles.trafficColourYellow
          : styles.trafficColourRed;
      }
    };
    return (
      <View>
        <View
          style={
            (styles.nutritionalContent, trafficColour(displayName, amount))
          }
        >
          <Text style={styles.ncNameText}>{displayName}</Text>
          <Text style={styles.amountText}>
            {amount}
            {unit}
          </Text>
          <Text>Nope</Text>
        </View>
      </View>
    );
  }
  return null;
};

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

    const renderItem = ({ item }) => <Item item={item} />;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text>{title}</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            style={styles.flatlist}
            contentContainerStyle={styles.flatlistContainer}
            numColumns={5}
            renderItem={({ item, data }) => renderItem({ item, data })}
            data={nutritionalContent}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
        <Text>Hello There</Text>
        <Text>Hello There</Text>
        <Text>Hello There</Text>
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    paddingBottom: "25%",
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  flatlistContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatlist: {
    backgroundColor: "pink",
  },
  nutritionalContent: {
    backgroundColor: "powderblue",
    borderRadius: 5,
    padding: 5,
    margin: 3,
  },
  trafficColourRed: {
    backgroundColor: "#edaeab",
  },
  trafficColourYellow: {
    backgroundColor: "#e5edab",
  },
  trafficColourGreen: {
    backgroundColor: "#abedac",
  },
  text: {
    textAlign: "center",
  },
  ncNameText: {
    textAlign: "center",
    fontSize: 10,
  },
  amountText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
