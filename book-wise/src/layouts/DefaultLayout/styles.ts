import { styled } from "../../../stitches.config";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
})

export const Content = styled("div", {
  width: "100%",
  height: "100vh",
  maxWidth: "996px",
  margin: "0 auto",
  paddingTop: 72,
})