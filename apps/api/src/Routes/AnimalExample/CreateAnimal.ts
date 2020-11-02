import { RequestHandler } from "Routes"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const CreateAnimal: (deps: CreateAnimalInterface) => RequestHandler<AnimalExample> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (req, res) => {
  const {
    name,
    rank,
  } = req.body

  const animal = AnimalExampleRepo.create({ name, rank })
  await AnimalExampleRepo.save(animal)

  return res.json({ animal })
}

export default CreateAnimal
