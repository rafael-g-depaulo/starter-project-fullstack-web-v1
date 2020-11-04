import getAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"
import DeleteAnimal from "./DeleteAnimal"

describe('CreateAnimal Route Handler', () => {
  
  // create Repo and Route, inject dependencies
  const [ AnimalExampleRepo, RepoConfig ] = getAnimalExampleRepo()
  const DeleteAnimalRoute = DeleteAnimal({ AnimalExampleRepo })

  // create sample animals for tests
  const raccoon = {
    id: "45",
    name: "Racoon",
    rank: 35,
  }
  const bird = {
    id: "124",
    name: "Bird",
    rank: 69,
  }
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })

  it('correctly deletes the animal given in the request body from the database table', async () => {
    // create table
    RepoConfig.table = [
      raccoon,
      bird,
    ]

    // create mocks
    const body = {
      animal: raccoon,
    }
    // mock response object
    const response = {
      json: jest.fn(),
    }

    // call route
    await DeleteAnimalRoute({ body }, response)

    // expect animal to be deleted from table
    const afterTable = RepoConfig.table
    expect(afterTable.length).toBe(1)
    expect(afterTable[0]).toMatchObject(bird)
  })

  it('correctly returns the deleted animal in the response json', async () => {
    // create table
    RepoConfig.table = [
      raccoon,
      bird,
    ]

    // create mocks
    const body = {
      animal: raccoon,
    }
    // mock response object
    const response = {
      json: jest.fn(),
      status: jest.fn(() => response.json),
    }

    // call route
    await DeleteAnimalRoute({ body }, response)

    // expect animal to be deleted from table
    const responseCalls = response.json.mock.calls
    expect(responseCalls.length).toBe(1)
    expect(responseCalls[0][0]).toMatchObject({ animal: raccoon })
    
    // if status is called, it should be called once with 200
    const statusCalls = response.status.mock.calls
    expect(statusCalls.length).toBeLessThanOrEqual(1)
    expect(statusCalls.length).toBeGreaterThanOrEqual(0)
    if (statusCalls.length === 1)
      expect(statusCalls[0][0]).toBe(200)
  })
})