import React, { useState } from 'react';
import styled from 'styled-components/native';



export default function TextComponent ({ ...props})  {
    return <Text {...props}>{props.children}</Text>
    
};

const Text = styled.Text`
    color: ${(props => props.color ? props.color : "white" )};
    // font-family: Avenir;
    margin: ${( {margin} ) => margin ?? 0}
    align-self: ${({ alignSelf }) => alignSelf ?? "none"}
    
    
    ${( {title, large, medium, small} ) => {
        switch(true){
            case title:
                return `font-size: 36px`;

            case large:
                return `font-size: 18px`;
            
            case medium:
                return `font-size: 16px`;

            case small:
                return `font-size: 12px`;
            
            default:
                return `font-size: 10px`
        }
    }}

    ${( {center, right} ) => {
        switch(true){
            case center:
                return `text-align: center`;

            case right:
                return `text-align: right`;
            
            default:
                return `text-align: left`;

        }
    }}

    ${ ( {bold, bolder, boldest} ) => {
        switch(true){
            case bold:
                return `font-weight: 200`;

            case bolder:
                return `font-weight: 400`;

            case boldest:
                return `font-weight: 800`;

            default:
                return `font-weight: 100`
        }


    }}

`;
