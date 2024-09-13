import axios from 'axios';

const  gameApi = axios.create({ baseURL: 'http://localhost:8000/games' });


async function getGames () {
    const response = await gameApi.get('/');

    return response.data
}



export{
    getGames
}