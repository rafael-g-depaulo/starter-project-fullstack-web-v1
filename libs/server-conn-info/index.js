const defaultEnv = "development"  // process.env.NODE_ENV

export const url = (env = defaultEnv) => `http://${domain(env)}:${port(env)}`

export const domain = (env = defaultEnv) => env === "development"
  ? "localhost"
  : "localhost"

export const port = (env = defaultEnv) => env === "development"
  ? 5000
  : process.env.PORT ?? 5000

export const strapiUrl = (env = defaultEnv) => env === "development"
  ? "http://localhost:1337"
  : process.env.STRAPI_URL ?? "http://localhost:1337"

// default serverUrl for most situations
export const serverUrl = url()
export default serverUrl
