import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { styles } from "../styles";
import { SIMILARITEMS_QUERY } from "../../../api/queries/getSimiliarItems";
import { NCItems } from "./NCItems";

export const SimilarItems = ({ group }) => {
  const { data, error, loading } = useQuery(SIMILARITEMS_QUERY, {
    variables: { search: group },
  });
  if (loading) {
    return <AppLoading />;
  }
  if (error) {
    return <Text>No alternatives found</Text>;
  }

  if (data !== undefined) {
    const results = data.getSimilarItems;
    return results.slice(0, 5).map((el) => {
      return (
        <View style={styles.container}>
          <Text>{el.title}</Text>
          <NCItems nutritionalContent={el.nutritionalContent} />
        </View>
      );
    });
  }
};
