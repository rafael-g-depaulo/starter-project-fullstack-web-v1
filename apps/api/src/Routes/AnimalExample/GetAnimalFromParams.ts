import { RequestHandler } from "Routes"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface GetAnimalDeps {
  AnimalExampleRepo: AnimalExampleRepository,
}

export interface AnimalRequest {
  animal: AnimalExample
}

interface Params {
  id: string,
}

export const GetAnimalFromParams: (deps: GetAnimalDeps) => RequestHandler<AnimalRequest, Params> = ({
  AnimalExampleRepo,
}) => async (req, res, next) => {

  const { id } = req.params

  const animal = await AnimalExampleRepo.findOne({ id })

  // if id doesnt correspont to an animal
  if (!animal) return res.status(404).json({ msg: "Animal not found!" })

  // add animal to body
  req.body = { animal }

  // go to next middleware
  return next && next()
}

export default GetAnimalFromParams
