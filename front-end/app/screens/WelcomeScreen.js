import React, { useEffect, useRef } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from "react-native";

function WelcomeScreen(props) {
  const animateLogo = useRef(new Animated.Value(0)).current;
  const animateText = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(animateLogo, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),

      Animated.timing(animateText, {
        toValue: 1,
        duration: 1200,
      }).start(),
    ]);
  });
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Animated.View style={{ opacity: animateText }}>
          <Image
            source={require("../assets/scannerIcon.png")}
            style={styles.logo}
          />
          <Text>Scan away</Text>
        </Animated.View>
      </View>

      <View style={styles.startButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "blue",
    opacity: 0.6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  startButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    opacity: 1,
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 100,
  },
});
export default WelcomeScreen;
