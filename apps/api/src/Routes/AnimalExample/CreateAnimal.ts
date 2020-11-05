import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const CreateAnimal: (deps: CreateAnimalInterface) => RequestHandler<DeepPartial<AnimalExample>> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (req, res) => {
  const {
    name,
    rank,
  } = req.body

  const animal = AnimalExampleRepo.create({ name, rank })
  await AnimalExampleRepo.save(animal)

  return res.status(200).json({ animal })
}

export default CreateAnimal
