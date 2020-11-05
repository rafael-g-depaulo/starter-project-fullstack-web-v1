import supertest from "supertest"
import express from 'express'

import { Connection } from "typeorm"
import CreateAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"

import AnimalExampleRouterFactory from "./index"

describe('AnimalExample Router', () => {

  // inject dependencies and create router and app
  const conn = {} as Connection
  const [AnimalExampleRepo, RepoConfig] = CreateAnimalExampleRepo()
  const AnimalExampleRoutes = AnimalExampleRouterFactory({ conn, AnimalExampleRepo })
  const agent = supertest
    .agent(express().use("*", AnimalExampleRoutes))

  // create sample animals for tests
  const snake = AnimalExampleRepo.create({
    name: "Snake",
    rank: 12,
  })
  const camel = AnimalExampleRepo.create({
    name: "Camel",
    rank: 82,
  })
  // const dog = AnimalExampleRepo.create({
  //   name: "Camel",
  //   rank: 82,
  // })
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })
  
  // describe('AnimalExample Creation', () => {
    // it("should 200 if everything's ok", async () => {})
    // it("should 201 with a valid AnimalExample in the request body", async () => {})
    // it("should 400 with an incomplete AnimalExample in the request body", async () => {})
    // it("should 503 if database can't be reached", async () => {})
  // })

  describe('List All AnimalExamples', () => {

    it("should 200 if everything's ok", async (done) => {
      RepoConfig.table = [snake, camel]
      await agent
        .get("/")
        .expect('Content-Type', /json/)
        .expect(200, { animals: [snake, camel] })
        .then(() => done())
    })

    // it("should 503 if database can't be reached", async () => {})

  })
  
  // describe('Show single AnimalExample', () => {
    // it("should 200 if the provided id is valid", async () => {})
    // it("should 400 if there is no id provided", async () => {})
    // it("should 404 if the id is invalid", async () => {})
    // it("should 503 if database can't be reached", async () => {})
  // })

  // describe('Delete single AnimalExample', () => {
    // it("should 200 if the provided id is valid", async () => {})
    // it("should 400 if there is no id provided", async () => {})
    // it("should 404 if the id is invalid", async () => {})
    // it("should 503 if database can't be reached", async () => {})
  // })

  // describe('AnimalExample CRUD Lifecycle', () => {
    // TODO
  // })
})
