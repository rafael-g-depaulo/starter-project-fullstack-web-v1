import "reflect-metadata"
import { createConnection } from "typeorm"

import { config } from "./config"

const connect = () => createConnection(config)
  .then(conn => ({ conn }))

export default connect
