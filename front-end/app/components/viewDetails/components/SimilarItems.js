import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useQuery } from "@apollo/client";
import { styles } from "../styles";
import { SIMILARITEMS_QUERY } from "../../../api/queries/getSimiliarItems";
import { NCItems } from "./NCItems";
import { veganList, GFList, useFilter } from "./filter";

export const SimilarItems = ({ group, currItem, GF, V }) => {
  try {
    const { data, error, loading } = useQuery(SIMILARITEMS_QUERY, {
      variables: { search: group },
    });
    if (loading) {
      return <AppLoading />;
    }
    if (error) {
      return <Text>Fant ingen alternativer</Text>;
    }
    if (data !== undefined) {
      let filteredData = [...data.getSimilarItems];
      if (V) {
        filteredData = useFilter(veganList, filteredData);
      }
      if (GF) {
        filteredData = useFilter(GFList, filteredData);
      }
      if (filteredData.length < 1 || filteredData === undefined) {
        return (
          <View style={styles.emptyContainer}>
            <View>
              <Text style={styles.text}>Fant ingen alternativer</Text>
            </View>
          </View>
        );
      }
      return filteredData
        .sort((a, b) => {
          if (
            a.nutritionalContent.length > 1 &&
            b.nutritionalContent.length > 1
          ) {
            return (
              a.nutritionalContent[0].amount - b.nutritionalContent[0].amount
            );
          }
          return a.title - b.title;
        })
        .slice(0, 5)
        .map((el) => {
          if (currItem !== el.title + el.subtitle) {
            return (
              <View
                key={el.title + el.subtitle}
                style={styles.similarItemContainer}
              >
                <Text style={styles.subtitle}>
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
        });
    }
  } catch (error) {
    return (
      <View style={styles.emptyContainer}>
        <View>
          <Text style={styles.text}>Fant ikke flere alternativer</Text>
        </View>
      </View>
    );
  }
};
