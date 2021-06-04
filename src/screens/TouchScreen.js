import React from "react";
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import Text from "../components/Text";
import Logo from "../components/Logo";
import { MaterialIcons } from "@expo/vector-icons";

export default function TouchScreen({ navigation }) {
  return (
    <Container>
      <Logo animation marginT={80} />

      <Touch onPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
        <Circle bgColor="#3b3200">
          <Circle bgColor="#766300">
            <Circle bgColor="#b19500">
              <Circle bgColor="#d8b600">
                <Circle bgColor="#ffd700">
                  <MaterialIcons name="fingerprint" size={35} color="white" />
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
        <Text medium center margin="16px 0 0 0">
          {" "}
          Sign in using Touch{" "}
        </Text>
      </Touch>

      <Text small center boldest margin="16px 0 0 0">
        {" "}
        Authenticate using pin{" "}
      </Text>
      <Pin onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
        <MaterialIcons name="lock" size={15} color="gold" />
        <Text small center color="gold">
          {" "}
          Sign in with access pin{" "}
        </Text>
      </Pin>
      <StatusBar barStyle="light-content"/>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  border-radius: 100px;
`;

const Pin = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 0;
  padding: 15px;
`;

const StatusBar = styled.StatusBar``
