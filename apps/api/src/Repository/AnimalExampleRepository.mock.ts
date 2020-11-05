import AnimalExample from "Entities/AnimalExample"
import { DeepPartial, FindConditions } from "typeorm"
import AnimalExampleRepository from "./AnimalExampleRepository"

interface RepoConfig<T> {
  resetTable(): void,
  table: T[],
}

export const CreateAnimalExampleRepo: () => [ AnimalExampleRepository, RepoConfig<AnimalExample> ] = () => {
  // table
  let animalTable: AnimalExample[] = []

  type pseudoAnimal = DeepPartial<AnimalExample>

  // mock function to create animal
  const create: (pseudo: pseudoAnimal) => AnimalExample = jest.fn<AnimalExample, [pseudoAnimal]>(
    ({ name = "", rank = 0 }) => ({
      name,
      rank,
      id: `${animalTable.length}.${name}.${rank}`,
      addId(){},
    })
  )

  // mock function to save animal to table
  const save: (animal: AnimalExample) => void = jest.fn<void, [AnimalExample]>(
    animal => animalTable.push(animal)
  )

  // mock function to remove animal from table
  const remove: (animal: AnimalExample) => Promise<AnimalExample> = jest.fn<Promise<AnimalExample>, [AnimalExample]>(
    animal => {
      // keep all animals except any with the same id as the given animal to remove
      animalTable = animalTable.filter(({ id }) => id !== animal.id)
      // return given animal
      return Promise.resolve(animal)
    }
  )

  // mock function to find a number of animals from table
  const find: (condition?: FindConditions<AnimalExample>) => Promise<AnimalExample[]> = jest.fn<Promise<AnimalExample[]>, [FindConditions<AnimalExample> | undefined]>(
    ({ id } = {}) => {
      if (!!id) return Promise.resolve(animalTable.filter(animal => animal.id === id))
      // if no condition, return all
      return Promise.resolve(animalTable)
    }
  )

  // mock function to find a single animal from table
  const findOne: (condition: FindConditions<AnimalExample>) => Promise<AnimalExample> = jest.fn<Promise<AnimalExample>, [FindConditions<AnimalExample>]>(
    cond => find(cond).then(results => results[0])
  )

  const MockedRepository: AnimalExampleRepository = {
    find,
    findOne,
    create,
    remove,
    save,
  } as AnimalExampleRepository

  const RepositoryConfig: RepoConfig<AnimalExample> = {
    resetTable: () => animalTable = [],
    get table(){ return animalTable },
    set table(newTable: AnimalExample[]) { animalTable = newTable },
  }

  // return mock
  return [ MockedRepository, RepositoryConfig ]
}

export default CreateAnimalExampleRepo
