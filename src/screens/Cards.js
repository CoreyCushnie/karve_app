import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import CustomKeyboard from "../components/KeyboardPad";
import { MaterialIcons } from "@expo/vector-icons";


const Cards = ({ navigation }) => {
  
  const keyPress = (item, index) => {
    switch(index){
      case "3, 0":
          return console.log("SHIFT")
      case "3, 8":
          return console.log("DEL")
      case "4, 0":
          return console.log("CLOSE")
      case "4, 1":
          return console.log(" ")
      case "4, 2":
          return console.log("SUBMIT")
      default:
          return console.log(item)
          }}
      
  return (
    <Container>
      
      <Touch onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={20} color={"white"} />
      </Touch>
      <Text large bolder center>
        Cards
      </Text>
      <CustomKeyboard onPress={keyPress}/>
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