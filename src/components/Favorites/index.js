import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "../../services/favorites";



const SearchContainer = styled.section`
    color: #000;
    text-align: center;
    padding: 85px 0;
    width: 80%;
    align-self: center;
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

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 15px; 
    overflow: hidden; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    align-self: center;
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

function Favorites() {
    const [games,setFavorites] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        const apiFavorites =  await getFavorites()
        setFavorites(apiFavorites)
    }

    async function removeFavorite(id) {
        await deleteFavorite(id)
        fetchGames()
        
    }

    return (
        <SearchContainer>
            <Title width = '50%'>Your Favorites!</Title>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Game Name</TableHeader>
                            <TableHeader>Platform</TableHeader>
                            <TableHeader>Rating</TableHeader>
                            <TableHeader>Image</TableHeader>
                            <TableHeader>Remove</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => (
                            <TableRow key={game.id}>
                                <TableCell>{game.name}</TableCell>
                                <TableCell>{game.platform}</TableCell>
                                <TableCell>{game.rating}</TableCell>
                                <TableCell>
                                    <GameImage src={getImageSrc(game.game_id)} alt={game.name} />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => removeFavorite(game.game_id)}>-</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            
        </SearchContainer>
    );
}

export default Favorites;
