import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import KeyPad from "../components/NumberPad";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import converter from "../utils/CurrencyConverter";
import Header from "../components/Header";
import Button from '../components/Button';
import Shake from '../utils/Effects';

export default function Send_Request({ navigation }) {
  const [dollarAmount, setDollarAmount] = useState("0");
  const [addCent, setAddCent] = useState(false)
  const [centAmount, setCentAmount] = useState("00");
  const [inputCount, setInputCount] = useState(0);
  const [shaker, setShaker] = useState(false)

  const handleDollarAmount = (value, index) => {
    if ((dollarAmount === "0") & (typeof value == "number")) {
      return setDollarAmount(`${value}`);
    }

    if (index != 11 & index != 9) {
      if (eval(dollarAmount + value) <= 25000){
        return setDollarAmount(`${dollarAmount + value}`)
      }else{
        setShaker(true)
        setTimeout(function () {
          setShaker(false)
        }, 500)
        return 
      }
  
    }

    if (index == 11) {
      return setDollarAmount((dollarAmount) =>
        dollarAmount.length == 1 ? "0" : dollarAmount.slice(0, -1)
      );
    }
  }

  const handleCentsAmount = (value, index) => {
  
    if (index != 11 & index != 9 & inputCount < 2) {
      if (index !== 10 || centAmount !== "00"){
        setInputCount(inputCount + 1)}
      return setCentAmount((centAmount) => eval(`${dollarAmount}.${(centAmount.slice(1) + value)}`) <= 25000 ? centAmount.slice(1) + value : "00")
  
    }

    if (index == 11){
      if(inputCount > 0) {
        setInputCount(inputCount - 1)
        return setCentAmount((centAmount) => `0${centAmount.slice(0, -1)}`);
      }
      setAddCent(false)

    }  
  }

  const handlePress = (value, index) => {
    if (index === 9){
      setAddCent(!addCent)
      setInputCount(0)
      setCentAmount("00")
    }
    
    if (addCent == false){
      return handleDollarAmount(value, index)
    }

    return handleCentsAmount(value, index)
  
    
  };

  return (
    <Container>
      <Header nav={navigation}/>
      <Value>
        <Text title center boldest color={ dollarAmount == "0" ? "#ffffff5f" : "#ffffff"}>
          <FontAwesome name="dollar" size={20} color={"#d8b600"} />{" "}
          {shaker ? (
            <>
            <Shake>
            <Text title center boldest color={ dollarAmount == "0" ? "#ffffff5f" : "#ffffff"}>
              {addCent ? converter.format(dollarAmount).slice(1, -2) : converter.format(dollarAmount).slice(1, -3) }{" "}
            </Text>
            </Shake>
          </>
          ): (
            <>
            {addCent ? converter.format(dollarAmount).slice(1, -2) : converter.format(dollarAmount).slice(1, -3) }{" "}
            </>
          )}
          
          
          {addCent && (
            <Text boldest large margin="-15px 0px 0px 0px" color={ centAmount == "00" ? "#ffffff5f" : "#ffffff"}>
              {centAmount}
            </Text>

          )}
          
        </Text>
      </Value>
      <Text center bolder small margin="0px 0px 45px">
        USD
      </Text>
      <KeyPad cash onPress={(value, idx) => {
        handlePress(value, idx)}} />
      <ButtonContainer>
        <Button name="SEND" buttonColor="#1e1e1e" textColor="white" onPress={() => navigation.navigate("Home")
        }/>
        <Button name="REQUEST" buttonColor="#1e1e1e" textColor="white"/>
      </ButtonContainer>
      
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1ef5;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 60px;
  padding: 20px;
  flex-direction: row;
  align-self: center;

`

const Value = styled.View`
  background-color: #1e1e1e;
  padding: 10px;
  margin: 40px auto 10px;
  border-bottom-end-radius: 20px;
  width: 250px;
  align-items: center;
  justify-content: center;
`;
