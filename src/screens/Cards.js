import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import Header from "../components/Header";
import cardData from "../../card_data";
import Card from "../components/Card";

const Cards = ({ navigation }) => {
  return (
    <Container>
      <Header nav={navigation} />
      <Text large bolder center>
        Cards
      </Text>
      <CardList
        keyExtractor={(item, index) => `${item}${index}-filtered`}
        ListHeaderComponent={() => {
          return (
            <>
              {cardData.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </>
          );
        }}
        showsVerticalScrollIndicator={true}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;
const CardList = styled.FlatList`
  flex: 1;
`;

export default Cards;
