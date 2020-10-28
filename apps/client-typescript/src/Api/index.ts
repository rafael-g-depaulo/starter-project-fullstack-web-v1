import axios from "axios"

// development options
const devOptions = {
  strapiUrl: "localhost:1337",
  serverUrl: "localhost:5000",
}

// production options
const productionOptions = {
  strapiUrl: "localhost:1337",
  serverUrl: "localhost:5000", // TODO: fix this with a propper server-conn-info lib
}

// chose env specific options
const envSpecificOptions = process.env.NODE_ENV === 'production'
  ? productionOptions : devOptions


// create axios instance to connect to main server
export const api = axios.create({
  ...envSpecificOptions,
  baseURL: envSpecificOptions.serverUrl,
})

// create axios instance to connect to strapi server
export const strapi = axios.create({
  ...envSpecificOptions,
  baseURL: envSpecificOptions.strapiUrl,
})