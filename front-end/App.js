import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { BarcodeScreen } from "./app/components/barcodescanner";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/background.png")}
    >
      <AnimatedSplash
        logoWidth={150}
        logoHeight={150}
        isLoaded={isLoaded}
        logoImage={require("./app/assets/scannerIcon.png")}
      >
        <View>
          <BarcodeScreen />
        </View>
      </AnimatedSplash>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "blue",
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
