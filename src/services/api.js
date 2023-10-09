import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND + '/api',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.getItem('token')
    }
});

export async function getUserInfo() {
    return await api.get(`/auth`);
}

export async function getGames() {
    return await api.get(`/game`);
}

export async function getGamesByFilter({gameType, platform}) {
    return await api.get(`/game/filter/${gameType}/${platform}`);
}

export async function getGamePlayUrl(id) {
  return await api.get(`/game/play/${id}`);
}