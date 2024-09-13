import axios from 'axios';

const  gameApi = axios.create({ baseURL: 'http://localhost:8000/mygames' });

async function getMyGames() {
    const response = await gameApi.get('/');
    return response.data
}

async function addMyGame(id) {
    await gameApi.post(`/${id}`);
}

async function deleteMyGame(id) {
    await gameApi.delete(`/${id}`);
}

export{
    getMyGames,
    addMyGame,
    deleteMyGame,
}