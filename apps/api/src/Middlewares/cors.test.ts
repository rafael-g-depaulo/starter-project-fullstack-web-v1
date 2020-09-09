import { resetTestEnv } from "Utils/resetTestEnv"
import { setupAllowedOrigins } from "./cors"

describe('middleware cors', () => {

  // resets process.env inbetween tests
  resetTestEnv()

  test('setupAllowedOrigins correctly extracts the origins from CORS_REGEX', () => {
    process.env.CORS_REGEX = `teste\\.herokuapp\\.com`
    process.env.CORS_REGEX_FLAGS = "ig"
    const origins = setupAllowedOrigins()

    expect(origins).toContainEqual(/teste\.herokuapp\.com/ig)
  })

  test('cors accepts requests from localhost', () => {
    // TODO
  })
  
  test('cors accepts requests without origin', () => {
    // TODO
  })

  test('cors accepts requests with an origin that matches CORS_REGEX', () => {
    // TODO
  })
})