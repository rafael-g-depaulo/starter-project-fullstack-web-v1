import axios from "axios"

// development options
const devOptions = {
  baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}`
}

// production options
const productionOptions = {
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions


console.log(envSpecificOptions)
// create axios instance
export const api = axios.create(envSpecificOptions)

export default api
