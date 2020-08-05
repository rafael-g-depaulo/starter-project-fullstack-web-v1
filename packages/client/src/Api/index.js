import axios from "axios"
import { serverUrl } from "@starter-project/server-conn-info"

// development options
const devOptions = {
}

// production options
const productionOptions = {
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions

console.log(serverUrl)
// create axios instance
export const api = axios.create({
  ...envSpecificOptions,
  baseURL: serverUrl,
})

export default api
