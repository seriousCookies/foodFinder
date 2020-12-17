import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { DATA_QUERY } from "../api/queries/getproduct";

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
    return (
      <SafeAreaView>
        <Text>{data.getProduct.title}</Text>
        <View>
          <Text>YAY</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return <Text>This item is not found</Text>;
  }
};

export default ViewDetails;

const styles = StyleSheet.create({});
