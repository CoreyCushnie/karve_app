import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";

const UserDetails = ({item, index}) => {
    return (
        <Container key={index}>
            <Text medium bold>{item.name}</Text>
            <UserData>
                <Text small bold>{item.email}</Text>
                <Text small bold>{item.phone}</Text>
            </UserData>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    height: 25px;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 45px 20px;
    border-bottom-width: 1px;
    border-color: #ffffff1f;

`

const UserData = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
`

export default UserDetails;