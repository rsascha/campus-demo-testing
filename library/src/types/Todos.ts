export type Todo<C> = {
  id: number;
  description: string;
  done: boolean;
  category: C;
};

export type Category = "shopping" | "learning" | "hobby";

export type Todos = Todo<Category>[];
