import styled from "styled-components";

export const Title = styled.h2`
    width: ${props => props.width || '100%'};
    padding: 30px 0;
    color: ${props => props.color || '#FFF'};
    font-size: ${props => props.fontSize || '36px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: ${props => props.margin || '0'}; 
    margin-top: ${props => props.marginTop || '0'};
    border: ${props => props.border || '2px solid #FFF'}; 
    border-radius: ${props => props.borderRadius || '10px'}; 
    box-sizing: border-box;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

