import axios, { AxiosInstance, AxiosResponse } from "axios";


const URL = `https://api-factory.simbirsoft1.com/api`;
const REQUEST_TIMEOUT = 20000;
const APPLICATION_ID = '5e25c641099b810b946c5d5b'
const RANDOM_STRING = 'u5taw48o'
const SECRET = '4cbcea96de';
const basicCode = btoa(`${RANDOM_STRING}:${SECRET}`);

const getAuthorization = (accessToken: string| null = null): string => {
    return accessToken
        ? `Bearer ${accessToken}`
        : `Basic ${basicCode}`
}


export const createAPI = (accessToken: string | null = null): AxiosInstance => {
    const api = axios.create({
        headers: {
            'X-Api-Factory-Application-Id': APPLICATION_ID,
            'Authorization': getAuthorization(accessToken),
            'Content-Type': 'application/json'
        },
        baseURL: URL,
        timeout: REQUEST_TIMEOUT
    });

    const onSuccess = (response: AxiosResponse) => response;

    const onFail = (err: Error) => {
        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);
    return api;
};