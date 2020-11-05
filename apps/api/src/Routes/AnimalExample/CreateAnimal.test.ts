import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"
import expectStatus200 from "Utils/expectStatus200"

import getAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"
import AnimalExample from "Entities/AnimalExample"
import CreateAnimal from "./CreateAnimal"

describe('CreateAnimal Route Handler', () => {

  const [ AnimalExampleRepo, RepoConfig ] = getAnimalExampleRepo()
  const createAnimalRoute = CreateAnimal({ AnimalExampleRepo })
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })

  it('correctly saves the animal given in the request body in the database table', async () => {
    
    // mock response and request objects
    const response = createResponseMock()
    const request = createRequestMock({
      name: "Cat",
      rank: 5
    })

    // created animal
    const createdAnimal = {
      name: "Cat",
      rank: 5,
      id: `0.Cat.5`, // id is created on the mock repository implementation of the create function
    } as AnimalExample

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect new dog to be saved to table
    const AnimalExampleTable = RepoConfig.table
    expect(AnimalExampleTable.length).toBe(1)
    expect(AnimalExampleTable[0]).toMatchObject(createdAnimal)
    
  })

  it('correctly returns the new animal in the response json', async () => {

    // mock response and request objects
    const response = createResponseMock()
    const request = createRequestMock({
      name: "Dog",
      rank: 25
    })

    // animal that should be created
    const createdAnimal = {
      name: "Dog",
      rank: 25,
      id: `0.Dog.25`, // id is created on the mock repository implementation of the create function
    } as AnimalExample

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect newly created animal to be sent to client in response json
    const mockCalls = response.json.mock.calls
    expect(mockCalls.length).toBe(1)  // expect to be called 1 time
    expect(mockCalls[0][0]).toMatchObject({ animal: createdAnimal })

    // if status is called, it should be called once with 200
    expectStatus200(expect, response)
  })
})
