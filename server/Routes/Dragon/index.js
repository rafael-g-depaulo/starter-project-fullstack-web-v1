import { Router } from 'express'

// Models
import DragonModel from "Models/Dragon"
import TitleModel from "Models/Title"

// Middlewares used
import getFromModel from 'Middlewares/getFromModel'
import getPaginatedFromModel from 'Middlewares/getPaginatedFromModel'

// Route handlers
import returnDragons from './returnDragons'
import create from './createDragon'
import addTitle from './addTitle'
import returnDragon from './returnDragon'
import deleteDragon from './deleteDragon'
import deleteDragonTitle from './deleteDragonTitle'

// use dependency injection in module
export default ({ Dragon = DragonModel, Title = TitleModel }, config) => {
  
  const getDragon = getFromModel({
    model: Dragon,
    objectName: "dragon",

    // sequelize options
    attributes: ['id', 'name'],
  })

  const getAllDragons = getPaginatedFromModel({
    model: Dragon,
    objectName: "dragons",
    objectsPerPage: 3,

    // sequelize options
    attributes: ['id', 'name'],
    include: [
      { association: 'titles', attributes: ['id', 'name'], through: { attributes: [] } },
    ],
  })

  return Router(config)
    // index
    .get('/', getAllDragons(), returnDragons)
    .post("/create", create)
    .post("/:dragon_id/addTitle", getDragon(), addTitle({ Title }))
    .get("/:dragon_id", getDragon({ include: 'titles' }), returnDragon)
    .delete("/:dragon_id", deleteDragon({ Dragon }))
    .delete("/:dragon_id/title/:title_id", getDragon({ include: 'titles' }), deleteDragonTitle({ Title }))
}
