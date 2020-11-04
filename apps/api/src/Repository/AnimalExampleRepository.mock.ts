import AnimalExample from "Entities/AnimalExample";

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

  // return mock
  return [
    {
      create,
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
