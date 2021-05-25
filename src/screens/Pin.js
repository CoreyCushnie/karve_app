import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import Logo from "../components/Logo";
import NumberPad from "../components/NumberPad";
import { MaterialIcons } from "@expo/vector-icons";

export default function PinScreen({ navigation }) {
  const [pinCount, setPinCount] = useState(0);
  const total = 6;

  const renderPin = () => {
    const pins = [];
    for (let i = 0; i < total; i++) {
      pins.push(
        i < pinCount ? (
          <PinContainer key={i}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={i} />
        )
      );
    }

    // Validate pin
    if (pinCount === total) {
      setTimeout(function () {
        setPinCount(0);
        navigation.navigate("Tabs");
      }, 500);
    }
    return pins;
  };

  const keyPress = (_, index) => {
    if (pinCount < 0) {
      setPinCount(0);
    }

    setPinCount((res) => {
      return index != 10 ? res + 1 : res - 1;
    });
  };

  return (
    <Container>
      <Logo marginT={70} />
      <Text small center boldest margin="40px 0 0 0 ">
        Enter your {total}-digit pin.
      </Text>

      <AccessPin>{renderPin()}</AccessPin>

      <UseTouch onPress={() => navigation.navigate("Touch")} delayPressIn={0}>
        <MaterialIcons name="lock" size={15} color="gold" />
        <Text small center color="white" margin="0 0 0 5px">
          Sign in with Touch ID
        </Text>
      </UseTouch>
      <NumberPad onPress={keyPress} />
      <Text small center margin="0 0 20px 0 " color="gold">
        Forgot pin?
      </Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const AccessPin = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 200px;
  margin: 25px 10px;
`;

const UseTouch = styled.TouchableOpacity`
  margin: 5px 0 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PinContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-color: gold;
  border-width: 1px;
  justify-content: center;
`;

const Pin = styled.View`
  align-self: center;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: #ffffff8f;
  justify-content: center;
`;
