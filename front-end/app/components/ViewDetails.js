import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../api/queries/getproduct";
const Item = ({ item }) => {
  const { displayName, amount, unit } = item;
  console.log(displayName, amount, unit);
  return (
    <View style={styles.item}>
      <Text style={styles.title}> {displayName}</Text>
    </View>
  );
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
      <SafeAreaView>
        <Text>{title}</Text>
        <View>
          <Text>YAY</Text>
          <FlatList
            data={nutritionalContent}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: "5%",
    marginVertical: "1%",
    marginHorizontal: "1%",
    flexDirection: "row",
  },
});
