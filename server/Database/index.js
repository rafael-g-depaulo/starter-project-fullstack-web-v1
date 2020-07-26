import fs from 'fs'
import path from 'path'
import Sequelize from "sequelize"
import config from "./config"
import { errorLog } from 'Utils/log'

// db connection variable
const sequelize = new Sequelize(config)

// function to get all of the model file names
const readDir = (folder = __dirname) => new Promise((resolve, reject) => {
  fs.readdir(folder, (err, fileNames) => {
    if (err) reject(err)
    else resolve(fileNames)
  })
})

// aux variable to hold sequelize, db connection instance and models
const db = {
  sequelize,
  Sequelize,
}

// read all models, initialize them and associate them
const modelsFolder = path.join(__dirname, "../Models/")
// get file names for all modules under "Models" folder
readDir(modelsFolder)
  // import all modules under the "Models" folder
  .then(fileNames => fileNames
    .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
    .map(file => import(path.join(modelsFolder, file)))
  )
  // wait for all models to load
  .then(modulePromises => Promise.all(modulePromises))
  // initialize and associate models
  .then(modules => modules
    // initialize models
    .map(module => {
      const Model = module.default
      Model.init(sequelize, Sequelize.DataTypes)
      db[Model.name] = Model
      return Model
    })
    // associate models
    .map(model => model?.associate(db))
  )
  // log error
  .catch(err => errorLog("LOADING SEQUELIZE MODELS", err))

// export connection
export default sequelize
