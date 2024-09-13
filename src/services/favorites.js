import axios from 'axios';

const  gameApi = axios.create({ baseURL: 'http://localhost:8000/favorites' });


async function getFavorites() {
    const response = await gameApi.get('/');
    return response.data
}

async function addFavorite(id) {
    await gameApi.post(`/${id}`);
}

async function deleteFavorite(id) {
    await gameApi.delete(`/${id}`);
}

export{
    getFavorites,
    addFavorite,
    deleteFavorite,
}