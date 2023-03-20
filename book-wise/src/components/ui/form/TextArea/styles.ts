import { styled } from "../../../../../stitches.config";

export const Container = styled("div", {
  background: "$gray800",
  border: "1px solid currentColor",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 4,
  color: "$gray500",
  transition: "0.2s",

  "&:focus-within": {
    color: "$green200"
  },

  textarea: {
    flex: 1,
    padding: "0.875rem $5",
    background: "none",
    border: "none",
    color: "$gray100",
    fontSize: "0.875rem",
    resize: "none",
    minHeight: "136px",

    "&::placeholder": {
      color: "$gray400"
    },

    "&:focus": {
      outline: "none"
    }
  },

  span: {
    color: "#7C7C8A",
    fontSize: "$xs",
    marginLeft: "auto",
    paddingRight: 8,
    paddingBottom: 4
  }
})