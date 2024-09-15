import styled from "styled-components";

export  const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    color: #fff;
    margin-top: -50px;
    width: 100%;
    letter-spacing: 1.5px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase; 
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 15px; 
    overflow: hidden; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    align-self: center;
`;

export const TableHeader = styled.th`
    background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    font-weight: bold;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
    &:nth-child(odd) {
        background-color: #ffffff; /* Cor de fundo para as linhas ímpares */
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
`;

export const GameImage = styled.img`
    width: 100px;
    height: auto;
`;
export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-left : ${props => props.margin || '0'};
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
    }
`;
export const ButtonImg = styled.img`
    width: 30px;
    align-self: center;
    onmouseover: cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;