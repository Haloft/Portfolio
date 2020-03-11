import axios from 'axios'
const baseUrl = 'https://us-central1-athpfolio.cloudfunctions.net/app/api/products'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}


const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll,
  
  create: create, 
  
  
}