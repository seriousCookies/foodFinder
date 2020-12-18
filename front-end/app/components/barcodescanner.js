import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import ViewDetails from "./viewDetails/ViewDetails";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export const BarcodeScreen = () => {
  const [CameraPermissionGranted, setCameraPermissionGranted] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [barcode, setBarcode] = useState(null);

  useEffect(() => {
    const statusFunc = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermissionGranted(status === "granted" ? true : false);
    };
    statusFunc();
  }, []);

  const barCodeScanned = ({ data }) => {
    //Access the Data
    setModalVisible(true);
    setBarcode(data);
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
        <View style={styles.mainContainer}>
          <Text style={styles.infoText}> Start scanning! </Text>
          <BarCodeScanner
            onBarCodeScanned={barCodeScanned}
            style={styles.scannerView}
          ></BarCodeScanner>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <ViewDetails barcode={{ barcode }} />

                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Scan another item</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
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
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5%",
  },
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 0,
    height: "90%",
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    top: "90%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
