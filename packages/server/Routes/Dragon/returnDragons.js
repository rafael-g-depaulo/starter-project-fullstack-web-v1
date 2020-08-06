export const returnDragons = async (req, res, next) => {
  const { dragons } = req
  return res.json({ dragons })
}

export default returnDragons
