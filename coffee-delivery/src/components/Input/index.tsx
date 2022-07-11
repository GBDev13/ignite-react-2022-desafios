import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { RegularText } from "../Typography";
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, value, ...props }, ref) => {
    return (
      <InputWrapper className={props.className} rightText={rightText}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && typeof error === "string" && (
          <RegularText size="s">{error}</RegularText>
        )}
      </InputWrapper>
    );
  }
);
