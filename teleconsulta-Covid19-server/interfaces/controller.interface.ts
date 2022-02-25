import { Router } from "express";
import { Repository } from "typeorm";

export default interface Controller {
  path: string;
  router: Router;
  manager: Repository<any>;
  initializeRoutes(): void;
}
