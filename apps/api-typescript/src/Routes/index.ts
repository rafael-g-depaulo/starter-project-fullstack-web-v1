import express, { Router as ExpressRouter, RouterOptions } from "express";

export interface Router {
  (deps: Object, options?: RouterOptions): ExpressRouter
}

const defaultOptions: RouterOptions = {
  mergeParams: true
}

const Routes: Router = ({}, options = defaultOptions) => express.Router(options)
  .get("/ping", (_, res) => res.json("pong"))

export default Routes
