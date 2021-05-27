import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "./Text";

export default function CustomKeyboard({
  shiftEnabled,
  onPress,
  ...props
}) {
  function renderKeys() {
    const keys = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      [
        <MaterialIcons
          style={{ alignItems: "center" }}
          name="file-upload"
          color={shiftEnabled ? "gold" : "white"}
        />,
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        <MaterialIcons style={{ alignItems: "center" }} name="backspace" />,
      ],
      [
        <MaterialIcons
          style={{ paddingHorizontal: 20 }}
          name="keyboard-arrow-down"
        />,
        <MaterialIcons style={{ paddingHorizontal: 80 }} name="space-bar" />,
        <MaterialIcons
          style={{ paddingHorizontal: 20 }}
          name="subdirectory-arrow-left"
        />,
      ],
    ];
    if (shiftEnabled) {
      for (var i = 1; i < keys.length; i++) {
        for (var j = 0; j < keys[i].length; j++) {
          const res = keys[i][j];
          if (typeof res == "string") {
            keys[i][j] = res.toUpperCase();
          }
        }
      }
    }

    return keys;
  }

  return (
    <KeyboardContainer {...props}>
      {renderKeys().map((item, index) => {
        return (
          <KeyboardRow key={item}>
            {item.map((i, idx) => {
              return (
                <Keys
                style={{ width: (typeof i == "string") ? "35px" : "auto" }}
                  key={`${idx}-${i}`}
                  onPress={() => onPress(i, `${index}, ${idx}`)}
                >
                  <Text large>{i}</Text>
                </Keys>
              );
            })}
          </KeyboardRow>
        );
      })}
    </KeyboardContainer>
  );
}

const KeyboardContainer = styled.View`
  position: absolute;
  bottom: 0px;
  margin: ${({ margin }) => margin ?? 0};
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 5px;
  align-items: center;
  align-self: center;
  z-index: 1;
`;

const KeyboardRow = styled.View`
  flex-direction: row;
  marging: 5px auto;
`;

const Keys = styled.TouchableOpacity`
  border-radius: 40px;
  background-color: #ffffff1c;
  border-width: 2px;
  border-color: #1e1e1edf;
  align-items: center;
  opacity: 0.7;
  justify-content: center;
  padding: 11px;
`;
