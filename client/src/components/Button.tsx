type DataType = {
  data: string;
};

type ButtonProps = {
  text: string;
  color?: string;
  onClick?: (data: DataType) => void;
};

export function Button({ text, onClick }: ButtonProps) {
  function handleOnClick() {
    if (onClick) {
      onClick({ data: "some data" });
    }
  }

  return (
    <button onClick={handleOnClick} data-testid="my-button-component">
      {text}
    </button>
  );
}
