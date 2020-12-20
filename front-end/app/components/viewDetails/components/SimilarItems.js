import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { styles } from "../styles";
import { SIMILARITEMS_QUERY } from "../../../api/queries/getSimiliarItems";
import { NCItems } from "./NCItems";

export const SimilarItems = ({ group, currItem }) => {
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
    let allergenfilter = ["egg"];
    return (
      [...data.getSimilarItems]
        // .sort((a, b) => {
        //   return a.nutritionalContent[0].amount - b.nutritionalContent[0].amount;
        // })
        .slice(0, 5)
        .map((el) => {
          if (currItem !== el.title + el.subtitle) {
            return (
              <View style={styles.container}>
                <Text>
                  {el.title} ({el.subtitle})
                </Text>
                <View style={styles.container}>
                  <NCItems
                    alternative={true}
                    nutritionalContent={
                      el.nutritionalContent.length > 1
                        ? el.nutritionalContent
                        : null
                    }
                  />
                </View>
              </View>
            );
          }
          return;
        })
    );
  }
};
