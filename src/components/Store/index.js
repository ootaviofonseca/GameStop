import { useEffect, useState } from "react";
import { addMyGame } from "../../services/mygames";
import { Table, Button, GameImage, TableHeader, TableCell, TableRow, Title } from "../Table";
import { ScreenContainer } from "../ContainerScreen";
import { getNotMyGames } from "../../services/store";
import { getGames } from "../../services/game";
import styled from "styled-components";

const images = require.context('../../images', false, /\.(jpg)$/);

function getImageSrc(id) {
    return images(`./${id}.jpg`);
}

const GameStoreContainer = styled.div`
    color: #000;
    text-align: center;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    margin-bottom: 20px;
`;

const TableContainer = styled.div`
    width: 100%;
    max-width: 1200px; /* Adjust as needed */
    overflow-x: auto;
`;

function StoreAll() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    async function fetchGames() {
        const apiGames = await getGames();
        setGames(apiGames);
    }

    async function insertMyGame(id) {
        await addMyGame(id);
        alert("Game added to your games");
    }

    return (
        <ScreenContainer>
            <Title width='50%'>All Games!</Title>
            <TableContainer>
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
                                    <GameImage src={getImageSrc(game.id)} alt={game.name} />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => insertMyGame(game.id)}>BUY</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ScreenContainer>
    );
}

function StoreNotMyGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    async function fetchGames() {
        const apiGames = await getNotMyGames();
        setGames(apiGames);
    }

    async function insertMyGame(id) {
        await addMyGame(id);
        alert("Game added to your games");
    }

    return (
        <ScreenContainer>
            <Title width='50%'>Games you don't have!</Title>
            <TableContainer>
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
                                    <GameImage src={getImageSrc(game.id)} alt={game.name} />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => insertMyGame(game.id)}>BUY</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ScreenContainer>
    );
}

function GameStore() {
    const [showAllGames, setShowAllGames] = useState(true);

    return (
        <GameStoreContainer>
            <ButtonContainer>
                <Button  onClick={() => setShowAllGames(true)}  >All Games</Button>
                
                <Button onClick={() => setShowAllGames(false) } margin = '30px'>I Don't Have</Button>
            </ButtonContainer>
            {showAllGames ? <StoreAll /> : <StoreNotMyGames />}
        </GameStoreContainer>
    );
}

export default GameStore;
