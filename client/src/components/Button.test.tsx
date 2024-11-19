import { render } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  let onClick: () => void;
  let button: HTMLElement;

  beforeAll(() => {
    onClick = vi.fn();
    const renderResult = render(<Button text="click me" onClick={onClick} />);
    button = renderResult.getByTestId("my-button-component");
  });

  it("should render a button", () => {
    expect(button).toBeDefined();
  });

  it("should render a button and match snapshot", () => {
    expect(button).toMatchSnapshot();
  });

  it("should call onClick when button is clicked", () => {
    button.click();
    expect(onClick).toHaveBeenCalledWith({ data: "some data" });
  });
});
