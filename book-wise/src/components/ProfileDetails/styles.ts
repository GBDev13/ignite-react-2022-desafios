import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderLeft: "1px solid $gray700",
  height: "max-content"
})

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "&::after": {
    content: "''",
    display: "block",
    width: 32,
    height: 4,
    background: "$gradient-horizontal",
    borderRadius: "$full",
    marginTop: 40
  }
})

export const ProfileDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 40,
  marginTop: 50
})