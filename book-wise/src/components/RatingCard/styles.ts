import Image from "next/image";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  borderRadius: 8,
  padding: "$6",
  display: "flex",
  flexDirection: "column",

  variants: {
    variant: {
      default: {
        background: "$gray700",
      },
      compact: {
        background: "$gray600",
      }
    }
  }
})

export const CompactDetails = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$3",
})

export const BookDetails = styled("div", {
  display: "flex",
  gap: "$5",

  img: {
    borderRadius: 4
  }
})

export const BookImage = styled(Image, {
  minWidth: 108,
  objectFit: 'cover',
  transition: "0.2s",

  "&:hover": {
    filter: "brightness(1.2)"
  }
})

export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
})

export const UserDetails = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  marginBottom: "$8",

  section: {
    display: "flex",
    alignItems: "center",
    gap: "$4"
  }
})

export const ToggleShowMoreButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "0.875rem",
  color: "$purple100",
  fontWeight: "$bold",
  marginLeft: "$1"
})