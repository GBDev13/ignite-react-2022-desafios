import Link from "next/link";
import { styled } from "../../../../stitches.config";

export const Container = styled(Link, {
  display: "flex",
  alignItems: "center",
  fontWeight: "$bold",
  fontSize: "$4",
  gap: "$2",
  textDecoration: "none",
  padding: "$2 $3",
  borderRadius: 4,
  transition: "0.2s",
  background: "transparent",
  border: "none",

  svg: {
    width: 20,
    height: 20,
  },

  variants: {
    iconSide: {
      left: {
        flexDirection: "row-reverse",
      },
      right: {
        flexDirection: "row",
      }
    },
    color: {
      white: {
        color: "$gray200",

        "&:hover": {
          background: "#E6E8F20A"
        },
      },
      purple: {
        color: "$purple100",

        "&:hover": {
          background: "#8381D90F"
        },
      }
    }
  },

  defaultVariants: {
    color: "purple",
  }
})