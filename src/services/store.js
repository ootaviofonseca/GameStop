import axios from 'axios';

const  gameApi = axios.create({ baseURL: 'http://localhost:8000/store' });

async function getNotMyGames() {
    const response = await gameApi.get('/');
    return response.data
}


export {
    getNotMyGames
}