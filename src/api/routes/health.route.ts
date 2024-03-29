import IndexController from "@/api/controllers/index.controller";
import { Route } from "@/api/routes/route";
import { Router } from "express";

export class HealthRoute implements Route {
  public router = Router();
  controller: IndexController;

  constructor() {
    this.controller = new IndexController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.controller.index);
  }
}
