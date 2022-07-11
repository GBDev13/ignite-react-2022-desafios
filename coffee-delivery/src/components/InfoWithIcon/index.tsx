import { InfoWithIconContainer, IconContainer } from "./styles";
import { ReactNode } from "react";

interface BenefitItemProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: BenefitItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
