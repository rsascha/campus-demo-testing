import { getTodos } from "@server/controller";
import { Router } from "express";

export const routerTodos = Router();

routerTodos.get("/", getTodos);
