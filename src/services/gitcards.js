import axios from 'axios';
const baseUrl = 'https://api.github.com/users/Haloft/repos'

const getAll = () => {
    

    return axios.get(baseUrl, {
        headers: {
            'Authorization': `Basic ${process.env.REACT_APP_TOKEN}`
        }
    })
}


export default {
    getAll: getAll
}