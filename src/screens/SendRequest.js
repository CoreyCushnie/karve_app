import React, { useState }  from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import KeyPad from "../components/NumberPad";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Send_Request = ({ navigation }) => {
  const [amount, setAmount] = useState("0.00") 
  const handlePress = (value, index) => {
    setAmount(value)
    console.log(value)
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
        <MaterialIcons name="settings" size={20} color={"#d8b600"} />
      </Header>
      <Touch onPress={() => navigation.navigate("Login")}>
        <MaterialIcons name="arrow-back-ios" size={20} color={"white"} />
      </Touch>
      <Text large bolder center>
        Send Request
      </Text>
      <Value>
        <Text center boldest small>
          Current Balance
        </Text>
        <Text title center bold color="#ffffff9f">
          <FontAwesome name="dollar" size={20} color={"#d8b600"} /> {amount}{" "}
        </Text>
      </Value>
      <KeyPad onPress={handlePress} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  padding: 20px 20px 10px 20px;
  flex-direction: row;
  align-items: center;
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
  margin: 20px auto;
  border-bottom-end-radius: 20px;
`;

export default Send_Request;
