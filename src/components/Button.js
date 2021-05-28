import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Text from './Text';

export default function Button({textColor, buttonColor, onPress, name, ...props}){
    return(
        <Container {...props}>
            <Touch style={{backgroundColor: buttonColor}} onPress={onPress}>
                <Text large center boldest color={textColor}>{name}</Text>
            </Touch>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    width: ${Dimensions.get("screen").width / 3}
    margin: 5px;
`;

const Touch = styled.TouchableOpacity`
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`