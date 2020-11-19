import Axios from 'axios'

const http = Axios.create({
  baseURL: 'http://http://192.168.1.9:3333',
})

export default http