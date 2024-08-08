import express from "express";
import {
  getEdit,
  postEdit,
  finishGithubLogin,
  logout,
  see,
  startGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userControllers";
import {
  avatarUpload,
  protectorMiddleware,
  publicOnlyMiddlware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddlware, startGithubLogin);
userRouter.get("/github/callback", publicOnlyMiddlware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
