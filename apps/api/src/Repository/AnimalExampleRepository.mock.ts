import AnimalExample from "Entities/AnimalExample";
import { FindConditions } from "typeorm";

export const CreateAnimalExampleRepo = () => {
  // table
  let animalTable: AnimalExample[] = []

  type pseudoAnimal = {
    name: string,
    rank: number,
  }

  // mock function to create animal
  const create = jest.fn<AnimalExample, [pseudoAnimal]>(
    ({ name, rank }) => ({
      name,
      rank,
      id: `${animalTable.length}.${name}.${rank}`,
      addId(){},
    })
  )

  // mock function to save animal to table
  const save = jest.fn<void, [AnimalExample]>(
    animal => animalTable.push(animal)
  )

  // mock function to remove animal from table
  const remove = jest.fn<AnimalExample, [AnimalExample]>(
    animal => {
      // keep all animals except any with the same id as the given animal to remove
      animalTable = animalTable.filter(({ id }) => id !== animal.id)
      // return given animal
      return animal
    }
  )

  // mock function to find a single animal from table
  const findOne = jest.fn<AnimalExample, [FindConditions<AnimalExample>]>(
    ({ id }) => {
      if (!!id) return animalTable.filter(animal => animal.id === id)[0]

      throw new Error("Mock function for this kind of find not implemented")
    }
  )

  // return mock
  return [
    {
      findOne,
      create,
      remove,
      save,
    },
    {
      resetTable: () => animalTable = [],
      get table(){ return animalTable },
      set table(newTable: AnimalExample[]){ animalTable = newTable }
    }
  ]
}

export default CreateAnimalExampleRepo
