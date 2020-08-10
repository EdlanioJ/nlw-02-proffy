import { Router } from "express";
import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMinutes";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionController";

interface ScheduleItem {
  week_day: string;
  from: string;
  to: string;
}

const classesController = new ClassesController();
const connectionController = new ConnectionController();
const routes = Router();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
