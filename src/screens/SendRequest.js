import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import KeyPad from "../components/NumberPad";
import { MaterialIcons } from "@expo/vector-icons";

const Send_Request = ({ navigation }) => {
  const handlePress = (value, index) => {};
  return (
    <Container>
      <Touch onPress={() => navigation.navigate("Touch")}>
        <MaterialIcons name="arrow-back-ios" size={20} color={"white"} />
      </Touch>
      <Text large bolder center>
        Send Request
      </Text>
      <KeyPad onPress={handlePress} />
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

export default Send_Request;