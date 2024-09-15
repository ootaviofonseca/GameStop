import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "../../services/favorites";
import { Table, Button,GameImage,TableHeader,TableCell,TableRow,Title,ButtonImg } from "../Table";
import { ScreenContainer } from "../ContainerScreen";
import trash from "../../images/trash.svg"




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
        <ScreenContainer>
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
                                    <Button onClick={() => removeFavorite(game.game_id)}>
                                        <ButtonImg src= {trash}/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            
        </ScreenContainer>
    );
}

export default Favorites;
