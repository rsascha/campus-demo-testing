import { Request, Response } from "express";

export function addTodo(req: Request, res: Response) {
  console.debug("addTodo", req.path);

  res.json({ message: "addTodo" });
}
