import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";
import { publicOnlyMiddlware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddlware).get(getJoin).post(postJoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddlware)
  .get(getLogin)
  .post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
