import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  background: "$gray700",
  padding: "$6",
  borderRadius: 8
})

export const UserDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> section": {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  }
})

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  marginTop: "$6"
})

export const ActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "$2",
})