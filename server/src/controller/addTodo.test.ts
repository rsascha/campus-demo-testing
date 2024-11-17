import { Request, Response } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { addTodo } from "./addTodo";
import { db } from "@server/utils";
import { TodoModel } from "@server/models/todos";

vi.mock("@server/models/todos");
db.connect = vi.fn();

vi.mock("@server/models/todos");
TodoModel.insertMany = vi.fn().mockReturnValue({ success: true });

describe("addTodo", () => {
  const req = { path: "/addTodo" } as Request;
  const statusJsonFn = vi.fn();
  const jsonFn = vi.fn();
  const res = {
    status: vi.fn(() => ({ json: statusJsonFn })),
    json: jsonFn,
  } as unknown as Response;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return request error if there is no body", () => {
    addTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(statusJsonFn).toHaveBeenCalledTimes(1);
  });

  it("should return request error if there is no description", () => {
    req.body = {};
    addTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(statusJsonFn).toHaveBeenCalledTimes(1);
  });

  it("should return request error if there is no title", () => {
    req.body = {};
    req.body.description = "description";
    addTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(statusJsonFn).toHaveBeenCalledTimes(1);
  });

  it("should connect to the database", async () => {
    req.body = {};
    req.body.description = "description";
    req.body.title = "title";
    await addTodo(req, res);
    expect(db.connect).toHaveBeenCalledTimes(1);
    expect(jsonFn).toHaveBeenCalledWith({ message: "addTodo" });
  });

  it("should insert a new todo", async () => {
    req.body = {};
    req.body.description = "description";
    req.body.title = "title";
    await addTodo(req, res);
    expect(TodoModel.insertMany).toHaveBeenCalledTimes(1);
    expect(jsonFn).toHaveBeenCalledWith({ message: "addTodo" });
  });
});
