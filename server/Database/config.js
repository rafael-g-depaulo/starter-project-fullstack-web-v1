import dotenv from "dotenv"
dotenv.config()

const config = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
}

export const development = config
export const local = config
export const test = config
export const production = config

export default config
