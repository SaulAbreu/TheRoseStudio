import axios from 'axios'
import API_URL from '~/services/apiConfig'

const api = {}

async function apiCall(url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

api.getRestaurants = () => {
  return apiCall('restaurants')
}

export default api