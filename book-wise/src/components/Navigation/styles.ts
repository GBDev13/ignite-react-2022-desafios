import Link from "next/link";
import { styled } from "../../../stitches.config";

export const Container = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$7",
})

export const NavItemContainer = styled(Link, {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  color: "$gray400",
  transition: "0.2s",

  svg: {
    marginRight: "$3"
  },

  "&:hover": {
    color: "$gray100",
  },

  "&::before": {
    content: "''",
    width: 4,
    height: 24,
    background: "$gradient-vertical",
    marginRight: "$4",
    borderRadius: "$full",
    transition: "0.2s",
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        color: "$gray100",
        fontWeight: "$bold",

        "&::before": {
          opacity: 1,
        }
      }
    }
  }
})