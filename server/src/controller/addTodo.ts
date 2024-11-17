import { TodoModel } from "@server/models/todos";
import { db } from "@server/utils";
import { Request, Response } from "express";

export async function addTodo(req: Request, res: Response) {
  console.debug("addTodo", req.path);

  if (!req.body) {
    res.status(400).json({ message: "No body" });
    return;
  }

  const description = req.body.description;
  if (!description) {
    res.status(400).json({ message: "No description" });
    return;
  }

  const title = req.body.title;
  if (!title) {
    res.status(400).json({ message: "No title" });
    return;
  }

  console.debug("description:", description);
  console.debug("title:", title);

  await db.connect();
  const result = await TodoModel.insertMany({ description, title });
  console.debug("result:", result);

  res.json({ message: "addTodo" });
}
