import { ReactNode, memo } from "react";
import { Button } from "react-bootstrap";

interface ButtonProps {
  type?: "button" | "submit";
  variant?: string;
  stretch?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const ButtonElement = ({
  type = "button",
  variant = "primary",
  stretch,
  disabled,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={`mt-2${stretch ? " w-100" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const ButtonMemo = memo(ButtonElement);

export { ButtonMemo };
