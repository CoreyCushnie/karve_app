import React from "react";
import styled from "styled-components/native";
import Text from './Text';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({nav, ...props}) {
  return (
    <HeaderContainer>
      {/* USER IMAGE OR INITIALS */}
      <PhotoContainer source={require("../../assests/me1.jpg")} />
      <Welcome>
        <Text medium boldest> Corey Cushnie </Text>
        <Text center bolder> Checking Account</Text>
      </Welcome>
      <Touch onPress={() => nav.navigate("Login")}>
        <MaterialIcons name="logout" size={20} color={"#d8b600"} />
      </Touch>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  padding: 20px 20px 10px 20px;
  flex-direction: row;
  background-color: #1e1e1e;
  align-items: center;
`;

const PhotoContainer = styled.Image`
  height: 50px;
  width: 50px;
  background-color: #ffffff1f;
  border-radius: 100px;
`;

const Touch = styled.TouchableOpacity`
  
`;

const Welcome = styled.View`
  flex: 1;
  align-items: flex-start;
  margin: 0 0 0 10px;
`;