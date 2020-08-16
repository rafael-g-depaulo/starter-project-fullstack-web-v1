// get defaults from env
const defaultEnv = process.env.NODE_ENV ?? "development"

const urlRegex = /^(?<protocol>http|https):\/\/(?<domain>[\w\.]+)(?:\:(?<port>\d+))?(?<path>[\w\/]*)$/

// generate set values for api (if given)
const ApiUrl      = process.env.API_URL ?? ""
const ApiRegex    = urlRegex.exec(ApiUrl)
const ApiDomain   = ApiRegex?.groups?.domain   ?? process.env.API_DOMAIN
const ApiPort     = ApiRegex?.groups?.port     ?? process.env.API_PORT
const ApiProtocol = ApiRegex?.groups?.protocol ?? process.env.API_PROTOCOL

// generate set values for strapi (if given)
const StrapiUrl       = process.env.STRAPI_URL ?? ""
const StrapiRegex     = urlRegex.exec(StrapiUrl)
const StrapiDomain    = StrapiRegex?.groups?.domain   ?? process.env.STRAPI_DOMAIN
const StrapiPort      = StrapiRegex?.groups?.port     ?? process.env.STRAPI_PORT
const StrapiProtocol  = StrapiRegex?.groups?.protocol ?? process.env.STRAPI_PROTOCOL

export const strapi = {
  
  url(nodeEnv = defaultEnv) {
    return `${this.protocol(nodeEnv)}://${this.domain(nodeEnv)}:${this.port(nodeEnv)}`
  },

  domain(nodeEnv = defaultEnv) {
    return StrapiDomain ?? "localhost"
  },

  port(nodeEnv = defaultEnv) {
    return StrapiPort
      ?? (nodeEnv !== "development" ? process.env.PORT : undefined) ?? 1337
  },
  
  protocol(nodeEnv = defaultEnv) {
    return StrapiProtocol
      ?? nodeEnv === "development" ? "http" : "http"
  },
}

export const api = {
  
  url(nodeEnv = defaultEnv) {
    return `${this.protocol(nodeEnv)}://${this.domain(nodeEnv)}:${this.port(nodeEnv)}`
  },
  
  domain(nodeEnv = defaultEnv) {
    return ApiDomain ?? "localhost"
  },
  
  port(nodeEnv = defaultEnv) {
    return  ApiPort
      ?? (nodeEnv !== "development" ? process.env.PORT : undefined) ?? 5000
  },

  protocol(nodeEnv = defaultEnv) {
    return ApiProtocol
      ?? nodeEnv === "development" ? "http" : "http"
  },
}
