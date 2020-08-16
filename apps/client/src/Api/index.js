import axios from "axios"
import { api as serverApi } from "@starter-project/server-conn-info"

// development options
const devOptions = {
}

// production options
const productionOptions = {
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions

// create axios instance
export const api = axios.create({
  ...envSpecificOptions,
  baseURL: serverApi.url(),
})

export default api
