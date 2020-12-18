import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "red",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "5%",
    paddingBottom: "25%",
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatlistContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flatlist: {
    backgroundColor: "pink",
  },
  nutritionalContent: {
    backgroundColor: "powderblue",
    borderRadius: 5,
    padding: 6,
    margin: 3,
  },
  trafficColourRed: {
    backgroundColor: "#FB6962",
    borderRadius: 5,
    padding: 6,
    margin: 3,
  },
  trafficColourYellow: {
    backgroundColor: "#e5edab",
    borderRadius: 5,
    padding: 6,
    margin: 3,
  },
  trafficColourGreen: {
    backgroundColor: "#abedac",
    borderRadius: 5,
    padding: 6,
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
    backgroundColor: "#abedac",
    borderRadius: 5,
    padding: 5,
    margin: 3,
  },
});
