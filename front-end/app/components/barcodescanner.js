import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export const BarcodeScreen = () => {
  const [CameraPermissionGranted, setCameraPermissionGranted] = useState(null);

  useEffect(() => {
    const statusFunc = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermissionGranted(status === "granted" ? true : false);
    };
    statusFunc();
  }, []);

  const barCodeScanned = ({ data }) => {
    //Access the Data
    alert(data);
  };

  switch (true) {
    case CameraPermissionGranted === false:
      return (
        <View style={styles.container}>
          <Text>Camera Permission Denied.</Text>
        </View>
      );
    case CameraPermissionGranted === true:
      return (
        <View>
          <Text style={styles.infoText}> Start scanning! </Text>
          <BarCodeScanner
            onBarCodeScanned={barCodeScanned}
            style={styles.scannerView}
          ></BarCodeScanner>
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <Text>Please grant Camera permission</Text>
        </View>
      );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scannerView: {
    height: DEVICE_HEIGHT / 1.1,
    width: DEVICE_WIDTH,
  },
  infoText: {
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
