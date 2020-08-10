import DragonModel from "Models/Dragon"

export const createDragon = ({ Dragon = DragonModel }) => async (req, res, next) => {
  const { name } = req.body
  Dragon.create({ name })
    .then(dragon => res.json({ dragon }))
    .catch(err => res.status(500).json(err))
}

export default createDragon
