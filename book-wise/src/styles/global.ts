import { nunito } from "@/pages/_app";
import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    fontFamily: nunito.style.fontFamily
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },

  "button, input, textarea": {
    fontFamily: "inherit",
  }
});