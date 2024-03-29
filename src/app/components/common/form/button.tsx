import { ReactNode, memo } from "react";
import { Button } from "react-bootstrap";

interface ButtonProps {
  type?: "button" | "submit";
  variant?: string;
  stretch?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const ButtonElement = ({
  type = "button",
  variant = "primary",
  stretch,
  disabled,
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={`mt-2 rounded-0 ${stretch ? " w-100" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const ButtonMemo = memo(ButtonElement);

export { ButtonMemo };
