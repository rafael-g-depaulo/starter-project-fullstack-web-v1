export interface Request<Body = {}, Params = {}> {
  params?: Params,
  body?: Body,
}

interface Jest {
  fn<A, B extends any[]> (impl?: () => void): jest.Mock<A, B>
}

interface Response {
  json: jest.Mock,
  status: jest.Mock,
}

export const createResponseMock = (jest: Jest) => {
  const responseMock: Response = {
    json: jest.fn(),
    status: jest.fn(() => responseMock),
  }

  return responseMock
}