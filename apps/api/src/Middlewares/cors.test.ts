import { resetTestEnv } from "Utils/resetTestEnv"
import { setupAllowedOrigins, CorsCallback, originChecker } from "./cors"

describe('middleware cors', () => {

  // resets process.env inbetween tests
  resetTestEnv()

  test('setupAllowedOrigins correctly extracts the origins from CORS_REGEX', () => {
    process.env.CORS_REGEX = `teste\\.herokuapp\\.com`
    process.env.CORS_REGEX_FLAGS = "ig"
    const origins = setupAllowedOrigins()

    expect(origins).toContainEqual(/teste\.herokuapp\.com/ig)
  })

  test('cors accepts requests from localhost outside production', () => {
    // TODO
  })
  
  test('cors accepts requests without origin', () => {
    // TODO
  })

  test('cors accepts requests with an origin that matches CORS_REGEX', () => {

    // setup request origin
    const origin = `https://starter-project-client-dev.herokuapp.com`
    process.env.CORS_REGEX = `starter-project-client-dev\\.herokuapp\\.com`
    process.env.CORS_REGEX_FLAGS = "ig"

    // setup allowed origins
    const origins = setupAllowedOrigins()

    // mock callback function
    const mockCallback = jest.fn((() => {}) as CorsCallback)

    // construct origin checker with above origins
    const checker = originChecker(origins)

    // check if origin is allowed
    checker(origin, mockCallback)

    // expect cors to be allowed
    expect(mockCallback).toBeCalledWith(null, true)
  })
})