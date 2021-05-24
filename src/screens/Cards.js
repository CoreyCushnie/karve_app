import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import { MaterialIcons } from "@expo/vector-icons";

const Cards = ({ navigation }) => {
  return (
    <Container>
      
      <Touch onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={20} color={"white"} />
      </Touch>
      <Text large bolder center>
        Cards
      </Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;
const Touch = styled.TouchableOpacity`
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px;
`;

export default Cards;