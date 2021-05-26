import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import KeyPad from "../components/NumberPad";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import converter from "../utils/CurrencyConverter";

export default function Send_Request({ navigation }) {
  const [amount, setAmount] = useState("0");

  const handlePress = (value, index) => {
    if (amount.length < 0) {
      setAmount("0");
    }
    setAmount((amount) => (index != 10 ? amount + value : amount.slice(0, -1)));
  };

  return (
    <Container>
      <Header>
        {/* USER IMAGE OR INITIALS */}
        <PhotoContaier source={require("../../assests/me1.jpg")} />
        <Welcome>
          <Text medium> Corey Cushnie </Text>
          <Text center> Checking Account</Text>
        </Welcome>
        <Touch onPress={() => navigation.navigate("Login")}>
          <MaterialIcons name="settings" size={20} color={"#d8b600"} />
        </Touch>
      </Header>
      <Text large bolder center margin="15px 0">
        Send Request
      </Text>
      <Value>
       
        <Text title center bold color="#ffffff9f">
          <FontAwesome name="dollar" size={20} color={"#d8b600"} />{" "}
          {converter.format(0.01 * amount).slice(1)}{" "}
        </Text>
        <Text center bold small>
          Amount
        </Text>
      </Value>
      <KeyPad onPress={handlePress}/>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1ef5;
`;

const Header = styled.View`
  padding: 20px 20px 10px 20px;
  flex-direction: row;
  align-items: center;
  background-color: #1e1e1e;
`;

const Welcome = styled.View`
  flex: 1;
  align-items: flex-start;
  margin: 0 0 0 10px;
`;

const PhotoContaier = styled.Image`
  height: 50px;
  width: 50px;
  background-color: #ffffff1f;
  border-radius: 100px;
`;

const Touch = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`;

const Value = styled.View`
  background-color: #1e1e1e;
  padding: 10px;
  margin: 0px auto;
  border-bottom-end-radius: 20px;
  width: 300px;
`;
