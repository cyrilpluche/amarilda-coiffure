import axios from 'axios';

const BASE_URL = 'http://localhost:4200/';

const apiMethods = {
    BASE_URL,

    get (url) {
        return axios.get(BASE_URL + url)
    },

    post (url, payload) {
        return axios.post(BASE_URL + url, payload)
    },

    put (url, payload) {
        return axios.put(BASE_URL + url, payload)
    },

    delete (url) {
        return axios.delete(BASE_URL + url)
    },
}

export default apiMethods
