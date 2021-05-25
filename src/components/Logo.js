import React, { useRef, useEffect } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const FadeInText = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);


  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <Animated.Text style={{ ...props.style, opacity: fadeAnim }}>
          {props.children[0]}
        </Animated.Text>
        
      </View>
      <Animated.Text style={{ ...props.style, opacity: fadeAnim2 }}>
        {props.children[1]}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default function Logo({ mini, animation, marginT }) {
  return (
    <View style={[s.container, { marginTop: marginT ? marginT : 0 }]}>
      {animation ? (
        <FadeInText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Text style={[s.text, { fontSize: mini ? 40 : 60 }]}>Karve</Text>

          </View>
          <View>
            <Text style={[s.footer, { fontSize: mini ? 8 : 10 }]}>
              MOBILE BANKING APP
            </Text>
          </View>
        </FadeInText>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Text style={[s.text, { fontSize: mini ? 40 : 60 }]}>
              Karve
            </Text>
          </View>
          <View>
            <Text style={[s.footer, { fontSize: mini ? 8 : 10 }]}>
              MOBILE BANKING APP
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },

  text: {
    color: "white",
  },
  footer: {
    backgroundColor: "gold",
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    fontWeight: "bold",
  },
});
