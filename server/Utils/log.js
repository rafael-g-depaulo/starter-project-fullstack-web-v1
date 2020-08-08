const errorLogAttribute = (attName, attValue) => !attValue
  ? ""
  : `\n  ${attName}: "${attValue}"`

export const errorLog = (feature, { ...errorDetails }) => {

  const logAttributes = Object
    .entries(errorDetails)
    .map(([attName, attValue]) => errorLogAttribute(attName, attValue))

  const errMsg = `ERROR IN ${feature}: ${logAttributes}`
  
  console.error(errMsg)

  return errMsg
}
