import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";

export default function BarcodeScanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scannedCode, setScannedCode] = useState("");
  const { requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const permission = await requestPermission();
    setHasPermission(permission);
    if (!permission) {
      await Linking.openSettings();
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ["ean-13", "ean-8", "upc-a", "upc-e"],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        setScannedCode(codes[0].value ?? "");
      }
    },
  });

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No camera permission</Text>
        <TouchableOpacity onPress={checkPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No camera found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
      <View style={styles.overlay}>
        <Text style={styles.scanText}>Align barcode within frame</Text>
        <TextInput
          style={styles.input}
          value={scannedCode}
          onChangeText={setScannedCode}
          placeholder="Scanned barcode will appear here"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
  scanText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#005260",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
