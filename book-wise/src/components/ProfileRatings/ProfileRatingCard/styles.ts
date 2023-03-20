import Image from "next/image";
import { styled } from "../../../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
})

export const CardContent = styled("div", {
  background: "$gray700",
  borderRadius: 8,
  padding: "$6",
  display: "flex",
  flexDirection: "column",
  gap: "$6",
})

export const BookDetails = styled("div", {
  display: "flex",
  gap: "$6",

  "> section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
})

export const BookImage = styled(Image, {
  minWidth: 98,
  objectFit: "cover",
  borderRadius: 4, 
  transition: "0.2s",

  "&:hover": {
    filter: "brightness(1.2)"
  }
})