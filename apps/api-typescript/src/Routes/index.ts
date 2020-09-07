import express, { Router as ExpressRouter, RouterOptions } from "express";
import UserRouter from "./User";

export interface Router<Deps extends {}> {
  (deps: Deps, options?: RouterOptions): ExpressRouter
}

const defaultOptions: RouterOptions = {
  mergeParams: true
}

type BaseRouterDeps = {

}

const Routes: Router<BaseRouterDeps> = ({}, options = defaultOptions) => express.Router(options)
  .get("/ping", (_, res) => res.json("pong"))
  .use("/user", UserRouter({}, options))

export default Routes
