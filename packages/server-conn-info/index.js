const defaultEnv = "development"  // process.env.NODE_ENV

export const url = (env = defaultEnv) => `http://${domain(env)}:${port(env)}`

export const domain = (env = defaultEnv) => env === "development"
  ? "localhost"
  : "localhost"

export const port = (env = defaultEnv) => env === "development"
  ? 5000
  : 5000

// default serverUrl for most situations
export const serverUrl = url()
export default serverUrl
