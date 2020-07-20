import Dragon from "Models/dragon"
import getFromModel from "Middlewares/getFromModel"

export default getFromModel({
  model: Dragon,
  objectName: "dragon",
  errorMsg: "404: dragon not found"
})
