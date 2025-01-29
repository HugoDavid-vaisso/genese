import Router from "@koa/router"
import Koa from "koa"
import Engine from "HugoDavid-vaisso"
import { koaMiddleware as publicodesAPI } from "@HugoDavid-vaisso/rest-api"

import rules from "../genese.model.json" assert { type: "json" }

const app = new Koa()
const router = new Router()

// Create middleware with your Engine
const apiRoutes = publicodesAPI(new Engine(rules))

// Basic routes usage (/evaluate, /rules, etc.)
router.use(apiRoutes)

app.use(router.routes()).listen(3000, () => {
  console.log("Server started on http://localhost:3000")
})
