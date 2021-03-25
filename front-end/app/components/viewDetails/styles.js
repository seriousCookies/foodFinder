import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "5%",
    paddingBottom: "20%",
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    color: "#3d3496",
    fontWeight: "bold",
    fontSize: 20,
    padding: "5%",
    paddingBottom: 0,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#4d6f94",
  },
  italicsSubtitle: {
    fontStyle: "italic",
    textAlign: "left",
    color: "#4d6f94",
  },
  label: {
    textAlign: "center",
    color: "#4d6f94",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  similarItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  SIContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  NCContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  alContainer: {
    flex: 0.75,
    justifyContent: "center",
  },
  filterContainer: {
    flex: 0.75,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 5,
  },
  emptyContainer: {
    flex: 4,
  },
  similarItemHeadingContainer: {
    marginRight: 2,
  },

  allergenContainer: {
    alignItems: "baseline",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  allergenTitleContainer: {
    flex: 2,
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 15,
  },
  allergenFlatlistContainer: {
    flex: 2,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  flatlistContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  nutritionalContent: {
    backgroundColor: "#0ebadb",
    borderRadius: 5,
    padding: 6,
    margin: 3,
  },
  trafficColourRed: {
    backgroundColor: "#d84f34",
    flexGrow: 1,
    borderRadius: 5,
    padding: 5,
    margin: 3,
  },
  trafficColourYellow: {
    backgroundColor: "#e5edab",
    borderRadius: 5,
    padding: 5,
    margin: 3,
  },
  trafficColourGreen: {
    backgroundColor: "#abedac",
    borderRadius: 5,
    padding: 5,
    margin: 3,
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
  allergentext: {
    backgroundColor: "#56b4b5",
    borderRadius: 5,
    padding: 1,
    margin: 3,
  },
  kanAllergenText: {
    backgroundColor: "#eeaa7a",
    borderRadius: 5,
    padding: 1,
    margin: 3,
  },
  circleJa: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#56b4b5",
    alignSelf: "center",
  },
  circleKan: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#eeaa7a",
    alignSelf: "center",
  },
});
