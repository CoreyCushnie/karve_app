import React from "react";
import styled from "styled-components/native";
import Text from '../components/Text';


const Card = ( {item, key} ) => {
    
    return(
        <CardContainer key={key}>
            <CardImage source={{uri: item.image}}/>
          <CardDetails>
              <Text large boldest>{item.name}</Text>
              <Text medium bold>{item.cardNumber}</Text>           
          </CardDetails>
          <Text bold>{item.exp}</Text>
        </CardContainer>
    )

}

const CardContainer = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 45px 10px 45px 0px;
border-bottom-width: 1px;
border-color: #ffffff1f;


`
const CardImage = styled.Image`
    border-radius: 100px;
    height: 30px;
    width: 30px;
    margin: 20px;
`
const CardDetails = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
`
export default Card;