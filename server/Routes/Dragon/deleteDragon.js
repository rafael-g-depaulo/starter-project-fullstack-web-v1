import DragonModel from "Models/Dragon"

export const deleteDragon = ({ Dragon = DragonModel }) => async (req, res, next) => {
  Dragon
    .destroy({ where: { id: req.params?.dragon_id } })
    .then(destroyedRows => destroyedRows === 0
      ? res.status(404).json({ err: "404 dragon doesn't exist" } )
      : res.json({ msg: "dragon sucessfully deleted" })
    )
}

export default deleteDragon
