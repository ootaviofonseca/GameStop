import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getGames } from "../../services/game";
import { addFavorite } from "../../services/favorites";
import { Table, Button,GameImage,TableHeader,TableCell,TableRow } from "../Table";
import { ScreenContainer } from "../ContainerScreen";


const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    color: #fff;
    width: 100%;
    letter-spacing: 1.5px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase; 
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
        <ScreenContainer>
            <Title>Find your game !</Title>
             
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
        </ScreenContainer>
    );
}

export default Search;
