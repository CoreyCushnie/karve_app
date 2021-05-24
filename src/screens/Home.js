import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import purchaseData from "../../data";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const renderTransactions = ({ item, index }) => {
    return (
      <PurchaseContainer key={index}>
        <PurchaseInfo>
          <Text medium>{item.name}</Text>
          <Text small>{item.address}</Text>
        </PurchaseInfo>
        <Text medium bolder>
          {item.amount}
        </Text>
      </PurchaseContainer>
    );
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
      <Balance>
        <Text boldest small>
          Current Balance
        </Text>
        <Text title center bold color="#ffffff9f">
          <FontAwesome name="dollar" size={25} color={"#d8b600"} /> 10,165.71{" "}
        </Text>
      </Balance>
      <Container></Container>
      <TransactionHeader>
        <Text small> Last purchase </Text>
        <TouchableOpacity>
          <MaterialIcons name="sort" size={25} color={"#d8b600"} />
        </TouchableOpacity>
      </TransactionHeader>
      <SearchHeader>
        <IconContainerL>
          <MaterialIcons name="search" size={25} color={"#d8b600"} />
        </IconContainerL>
        <Search
          type="text"
          placeholder="Search transactions"
          placeholderTextColor="#ffffff7f"
        />
      </SearchHeader>
      <Transactions
        ListHeaderComponent={<></>}
        keyExtractor={(item, index) => `${index}`}
        data={purchaseData}
        renderItem={renderTransactions}
        showsVerticalScrollIndicator={true}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1ef5;
`;
const Header = styled.View`
  padding: 20px 20px 10px 20px;
  flex-direction: row;
  background-color: #1e1e1e;

  align-items: center;
`;

const PhotoContaier = styled.Image`
  height: 50px;
  width: 50px;
  background-color: #ffffff1f;
  border-radius: 100px;
`;
const Welcome = styled.View`
  flex: 1;
  align-items: flex-start;
  margin: 0 0 0 10px;
`;
const Balance = styled.View`
  background-color: #1e1e1e;
  padding: 10px;
  margin: 20px auto;
  border-bottom-end-radius: 20px;
`;
const Transactions = styled.FlatList`
  flex: 1;
`;
const TransactionHeader = styled.View`
  flex-direction: row;
  margin: 10px 20px 10px 20px;
  justify-content: space-between;
  border-bottom-width: 1px;

  border-color: #ffffff1f;
  align-items: center;
  padding-vertical: 10px;
`;
const SearchHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
`;
const Search = styled.TextInput`
  flex: 1;
  background-color: #5f5f5f9f;
  padding: 15px 15px 15px 55px;
  border-radius: 10px;
  color: white;
`;
const IconContainerL = styled.View`
  position: absolute;
  z-index: 1;
  left: 35px;
`;

const PurchaseContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 25px;
  border-bottom-width: 1px;
  border-color: #ffffff1f;
  margin: 1px 20px;
`;
const PurchaseInfo = styled.View`
  justify-content: center;
`;

export default Home;
