import { Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";
import { addTodo } from "./addTodo";

describe("addTodo", () => {
  it("should return a message", () => {
    const req = { path: "/addTodo" } as Request;
    const res = { json: vi.fn() } as unknown as Response;
    addTodo(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "addTodo" });
  });
});
