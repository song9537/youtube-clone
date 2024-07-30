import express from "express";
import {
  edit,
  finishGithubLogin,
  logout,
  see,
  startGithubLogin,
} from "../controllers/userControllers";
import { remove } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
