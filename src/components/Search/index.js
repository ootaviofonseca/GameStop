import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { games } from './searchData';

const SearchContainer = styled.section`
    color: #000;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`;

const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
    margin-left: 10%;
    border-radius: 15px; 
    overflow: hidden; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
`;

const TableHeader = styled.th`
    background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    font-weight: bold;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
    &:nth-child(odd) {
        background-color: #ffffff; /* Cor de fundo para as linhas ímpares */
    }
`;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
`;

const GameImage = styled.img`
    width: 100px;
    height: auto;
`;

function Search() {
    const [searchedGames, setSearchedGames] = useState([]);

    return (
        <SearchContainer>
            {/*<Title>Search!</Title>*/}
             {/*<SubTitle>Found Your Game</SubTitle>*/}
            <Input 
                placeholder="Search for a game"
                onBlur={(event) => {
                    const typedText = event.target.value.toLowerCase();
                    const result = games.filter(game => game.name.toLowerCase().includes(typedText));
                    setSearchedGames(result);
                }}
            />

            {searchedGames.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Game Name</TableHeader>
                            <TableHeader>Platform</TableHeader>
                            <TableHeader>Rating</TableHeader>
                            <TableHeader>Image</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedGames.map(game => (
                            <TableRow key={game.id}>
                                <TableCell>{game.name}</TableCell>
                                <TableCell>{game.platform}</TableCell>
                                <TableCell>{game.rating}</TableCell>
                                <TableCell>
                                    <GameImage src={game.src} alt={game.name} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            )}
        </SearchContainer>
    );
}

export default Search;
