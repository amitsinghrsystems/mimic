import { _fetch as fetch } from "./api_services";
import { API_PATH_MPO, API_PATH_MID } from "../constants/path";
import { TOKEN } from "../constants/token";

export const getUser = () => {
    return fetch('get', API_PATH_MID + 'users/me', {}, {
        'Authorization': TOKEN
    })
}

export const updateUser = (options) => {
    return fetch('put', API_PATH_MPO + 'users/me', options, {
        'Content-Type':'application/json',
        'Authorization': TOKEN
    })
}

export const getUpdatedUser = () => {
    return fetch('get', API_PATH_MPO + 'users/me', {}, {
        'Authorization': TOKEN
    })
}
