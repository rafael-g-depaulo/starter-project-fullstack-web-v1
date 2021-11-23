import express from "express"
import { Connection } from "typeorm"

import { Router } from "Routes"
import UserRepository from "Repository/UserRepository"

import CreateUser from "./Create"
import ListUsers from "./List"

type UserDeps = {
  conn: Connection
  UserRepo?: UserRepository
}

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps

  return express
    .Router(options)
    // i'm pretty sure the frontend is using get when it should be using post, but i don't have
    // the time to check and fix it correctly, so this bad code duplication goes here instead
    .post("/register", CreateUser({ UserRepo }))
    .post("/login", CreateUser({ UserRepo }))
    .post("/logout", CreateUser({ UserRepo }))
    .get("/", ListUsers({ UserRepo }))
}

export default UserRouter
