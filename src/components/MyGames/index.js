import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMyGames, deleteMyGame } from "../../services/mygames";
import { Table, Button,GameImage,TableHeader,TableCell,TableRow,Title } from "../Table"
import { ScreenContainer } from "../ContainerScreen"

const images = require.context('../../images', false, /\.(jpg)$/);

function getImageSrc(id) {
    return images(`./${id}.jpg`);
}


function MyGames() {
    const [games,setMyGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        const apiMyGames =  await getMyGames()
        setMyGames(apiMyGames)
    }

    async function removeMyGame(id) {
        await deleteMyGame(id)
        fetchGames()
        
    }

    return (
        <ScreenContainer>
            <Title width = '30%'>My Games!</Title>
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
                                    <Button onClick={() => removeMyGame(game.game_id)}>-</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            
        </ScreenContainer>
    );
}

export default MyGames;