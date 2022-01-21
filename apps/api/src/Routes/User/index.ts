import express from "express"
import { Connection } from "typeorm"

import { Router } from "Routes"
import UserRepository from "Repository/UserRepository"

import ensureAuthenticated from "Middlewares/ensureAuthenticated"
import ParseBody from "Middlewares/parseBody"

import { loginUserSchema, registerUserSchema } from "@starter-project/entities"

import RegisterUser from "./Register"
import LoginUsers from "./Login"
import ListUsers from "./List"

type UserDeps = {
  conn: Connection
  UserRepo?: UserRepository
}

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps

  return express
    .Router(options)
    .post("/register", ParseBody(registerUserSchema, "user_info"), RegisterUser({ UserRepo }))
    .post("/login", ParseBody(loginUserSchema, "user_info"), LoginUsers({ UserRepo }))
    // .post("/logout", RegisterUser({ UserRepo }))
    .get("/", ensureAuthenticated, ListUsers({ UserRepo }))
}

export default UserRouter
