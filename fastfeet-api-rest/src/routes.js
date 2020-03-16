import express from "express";
import UserController from "./app/controllers/UserController";
import authMiddlaware from "./app/middlewares/auth";
import RecipientsController from "./app/controllers/RecipientsController";
import SessionController from "./app/controllers/SessionController";

const routes = express.Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// Recipients
routes.get(
  "/recenpients/showAll",
  authMiddlaware,
  RecipientsController.showAll
);
routes.get("/recenpients/show/:id", authMiddlaware, RecipientsController.show);
routes.put(
  "/recenpients/edit/:id",
  authMiddlaware,
  RecipientsController.update
);
routes.delete(
  "/recenpients/delete/:id",
  authMiddlaware,
  RecipientsController.delete
);
routes.post("/recenpients/create", authMiddlaware, RecipientsController.create);

export default routes;
