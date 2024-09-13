import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getGames } from "../../services/game";
import { addFavorite } from "../../services/favorites";



const SearchContainer = styled.section`
    color: #000;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`;

const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    color: #fff;
    width: 100%;
    letter-spacing: 1.5px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase; 
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
        background-color: #ffffff; 
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

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
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

const images = require.context('../../images', false, /\.(jpg)$/);

function getImageSrc(id) {
    return images(`./${id}.jpg`);
}


function Search() {
    const [searchedGames, setSearchedGames] = useState([])
    const [games,setGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        const apiGames =  await getGames()
        setGames(apiGames)
    }

    async function insertFavorite(id){
        await addFavorite(id)
        alert ("Game added to favorites")   
    }


    return (
        <SearchContainer>
            <Title>Find your game !</Title>
             {/*<SubTitle>Found Your Game</SubTitle>*/}
            <Input 
                placeholder="Search for a game"
                onBlur={(event) => {
                    const typedText = event.target.value.toLowerCase()
                    const result = games.filter(game => game.name.toLowerCase().includes(typedText))
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
                            <TableHeader>Actions</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedGames.map(game => (
                            <TableRow key={game.id} >
                                <TableCell>{game.name}</TableCell>
                                <TableCell>{game.platform}</TableCell>
                                <TableCell>{game.rating}</TableCell>
                                <TableCell>
                                    <GameImage src={getImageSrc(game.id)} alt={game.name} />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => insertFavorite(game.id)}>+</Button> 
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
