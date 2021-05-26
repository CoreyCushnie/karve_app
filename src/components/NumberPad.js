import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";
import Text from "./Text";

export default function NumberPad({ onPress, ...props }) {
  function numbers() {
    const res = [];

    for (let i = 1; i < 10; i++) res.push(i);
    res.push(0);
    res.push(<MaterialIcons name="arrow-left"  />);

    return res;
  }

  return (
    <KeyPad {...props}>
      {numbers().map((items, index) => {
        return (
          <Number
            key={index}
            onPress={() => onPress(items, index)}
            delayPressIn={0}
            value={items}
          >
            <Text large bolder center>
              {items}
            </Text>
          </Number>
        );
      })}
    </KeyPad>
  );
}

const KeyPad = styled.View`
  margin: ${({ margin }) => margin ?? 0};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  width: ${(Dimensions.get("window").width * 0.5) + 48}px;
  
`;

const Number = styled.TouchableOpacity`
  width: ${(Dimensions.get("window").width / 6) }px;
  height: ${(Dimensions.get("window").width / 6) }px;
  border-radius: 100px;
  background-color: #ffffff1c;
  border-width: 5px;
  border-color: #1e1e1edf;
  align-items: center;
  opacity: 0.7;
  justify-content: center;
  margin: 10px 8px;

`;
