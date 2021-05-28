import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export default function Shake(props){

  const startShake = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
        Animated.timing(startShake, { toValue: 5, duration: 50, useNativeDriver: true }),
        Animated.timing(startShake, { toValue: -5, duration: 50, useNativeDriver: true }),
        Animated.timing(startShake, { toValue: 5, duration: 50, useNativeDriver: true }),
        Animated.timing(startShake, { toValue: 0, duration: 50, useNativeDriver: true }),
        Animated.timing(startShake, { toValue: 5, duration: 50, useNativeDriver: true }),
        Animated.timing(startShake, { toValue: 0, duration: 50, useNativeDriver: true })
      ]).start();
  }, [startShake]);


  return (
    <Animated.View style={{ transform: [{translateY: startShake}] }}>  
        {props.children}
    </Animated.View>
  );
};
