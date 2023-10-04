import React, { useRef, useEffect } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export function Shake(props) {
  const startShake = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(startShake, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(startShake, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(startShake, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(startShake, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(startShake, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(startShake, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, [startShake]);

  return (
    <Animated.View style={{ transform: [{ translateY: startShake }] }}>
      {props.children}
    </Animated.View>
  );
}

export function Fade({ ...props }) {
  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeIn, {
        toValue: 0,
        duration: 500,
        delay: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeIn]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: "30%",
        alignSelf: "center",
        justifyContent: "center",
        opacity: fadeIn,
      }}
    >
      <BlurView intensity={40} style={s.blurStyle}>
        {props.children}
      </BlurView>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  blurStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 20
  },
});
