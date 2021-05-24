import React from "react";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";
import Text from "./Text";

export default function NumberPad({ onPress, ...props }) {
  function numbers() {
    const res = [];

    for (let i = 1; i < 10; i++) res.push(i);
    res.push(0);
    res.push(<MaterialIcons name="keyboard-backspace" size={15} />);

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
            <Text medium boldest>
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
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 320px;
  padding: 20px;
  align-items: center;
  align-self: center;
  
`;

const Number = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  border-radius: 100px;
  background-color: #ffffff1c;
  border-width: 5px;
  border-color: #1e1e1edf;
  align-items: center;
  padding: 5px;
  opacity: 0.7;
  justify-content: center;
  margin: 5px 10px;
`;
