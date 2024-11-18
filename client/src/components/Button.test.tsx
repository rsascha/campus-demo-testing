import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button", () => {
    const result = render(<Button text="click me" />);
    expect(result).toBeDefined();
  });

  it("should render a button and match snapshot", () => {
    const result = render(<Button text="click me" />);
    expect(result.container).toMatchSnapshot();
  });
});
