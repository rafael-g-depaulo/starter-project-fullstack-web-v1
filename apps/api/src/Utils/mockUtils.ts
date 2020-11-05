import { NextFunction, Request, Response } from "express"
import { RequestHandler } from "Routes"

export interface MockNext {
  (): void
}

export interface MockRequest<Body = {}, Params = {}> {
  params?: Params,
  body?: Body,
}

interface Jest {
  fn<A, B extends any[]> (impl?: () => void): jest.Mock<A, B>
}

export interface MockResponse {
  // json: jest.Mock,
  // status: jest.Mock,
  json: jest.Mock<Express.Response, [any]>,
  status: jest.Mock<Express.Response, [number]>,
}

export const createResponseMock = (_jest: Jest = jest) => {
  const responseMock: MockResponse = {
    json: _jest.fn(),
    status: _jest.fn(() => responseMock),
  }

  return responseMock
}

export const expectStatus200 = (expect: jest.Expect, response: MockResponse) => {
  const statusCalledTimes = response.status.mock.calls.length
  expect(statusCalledTimes).toBeLessThanOrEqual(1)
  expect(statusCalledTimes).toBeGreaterThanOrEqual(0)
  if (statusCalledTimes === 1)
    expect(response.status).toBeCalledWith(200)
}

export const mockRouteHandler = <ReqBody = {}, ReqParams = {}>(handler: RequestHandler<ReqBody, ReqParams>, request: MockRequest<ReqBody, ReqParams>, response: MockResponse, next?: MockNext) =>
  handler(request as Request<ReqParams>, response as unknown as Response, next as NextFunction)
