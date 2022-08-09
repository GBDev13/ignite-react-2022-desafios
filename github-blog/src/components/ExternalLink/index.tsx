import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinkContainer } from "./styles";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ComponentProps, ReactNode } from "react";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  href?: string;
  icon?: ReactNode;
  variant?: "iconLeft";
};

export function ExternalLink({
  text,
  icon,
  variant,
  ...rest
}: ExternalLinkProps) {
  return (
    <ExternalLinkContainer variant={variant} {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
}
