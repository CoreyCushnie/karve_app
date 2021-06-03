import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../components/Text";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";

const Users = ({ navigation, ...props }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((json) => json.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    console.table(props)
    return;
  }, []);

  return (
    <UserContainer>
      <Header nav={navigation} />

      <Text boldest large margin="25px">
        Users
      </Text>
      <User
        keyExtractor={(item, index) => `${item}${index}`}
        data={data}
        renderItem={({item, index})=> <UserDetails item={item} key={index} /> }
         
        showsVerticalScrollIndicator={true}
      />
    </UserContainer>
  );
};

const UserContainer = styled.View`
  flex: 1;
  background-color: #1e1e1e;
`;
const User = styled.FlatList`
  flex: 1;
`;

export default Users;
