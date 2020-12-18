import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "5%",
    paddingBottom: "30%",
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    color: "#3d3496",
    fontWeight: "bold",
    fontSize: 25,
    padding: "5%",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  allergenContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  flatlistContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  nutritionalContent: {
    backgroundColor: "#2ba7c7",
    borderRadius: 5,
    padding: 6,
    margin: 3,
  },
  trafficColourRed: {
    backgroundColor: "#d84f34",
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
