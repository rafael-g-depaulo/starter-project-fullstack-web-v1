import { Router } from 'express'

export default ({}, options) => {
  return Router(options)
    .post("/register", (req, res) => {})
    .get("/current", (req, res) => {})
    .post("/login", (req, res) => {})
}
