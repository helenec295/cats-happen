import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.petfinder.com/v2/animals'
})

export default instance