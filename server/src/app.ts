import express, { json } from "express";
import { Category, Todo } from "@library/types";

const app = express();

app.use(json());

app.get("/api/", (_, res) => {
  const newTodo: Todo<Category> = {
    id: Math.random(),
    description: "description",
    category: "hobby",
    done: false,
  };
  res.json(newTodo);
});

export const viteNodeApp = app;
