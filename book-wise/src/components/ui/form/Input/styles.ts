import { styled } from "../../../../../stitches.config";

export const InputContainer = styled("div", {
  background: "$gray800",
  border: "1px solid currentColor",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  gap: "$5",
  paddingRight: "$5",
  color: "$gray500",
  transition: "0.2s",

  "&:focus-within": {
    color: "$green200"
  },

  input: {
    height: 48,
    flex: 1,
    paddingLeft: "$5",
    background: "none",
    border: "none",
    color: "$gray100",
    fontSize: "0.875rem",

    "&::placeholder": {
      color: "$gray400"
    },

    "&:focus": {
      outline: "none"
    }
  }
})