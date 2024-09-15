import { useEffect, useState } from "react";
import { getMyGames, deleteMyGame } from "../../services/mygames";
import { Table, Button,GameImage,TableHeader,TableCell,TableRow,Title, ButtonImg } from "../Table"
import { ScreenContainer } from "../ContainerScreen"
import trash from "../../images/trash.svg"

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
            {games.length === 0 ? (
                <Title width = '70%'>Too bad, you don't have games
                Go to our store and buy some for yourself</Title>
            ) : (
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
                        {games.map((game) => (
                            <TableRow key={game.id}>
                                <TableCell>{game.name}</TableCell>
                                <TableCell>{game.platform}</TableCell>
                                <TableCell>{game.rating}</TableCell>
                                <TableCell>
                                    <GameImage src={getImageSrc(game.game_id)} alt={game.name} />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => removeMyGame(game.game_id)}>
                                        <ButtonImg src= {trash}/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            )}
        </ScreenContainer>
    );
}

export default MyGames;