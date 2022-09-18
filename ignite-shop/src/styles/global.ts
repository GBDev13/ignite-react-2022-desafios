import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,

    "::-webkit-scrollbar": {
      width: 6,
    },

    "::-webkit-scrollbar-track": {
      background: "$gray900",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$green500",
      borderRadius: 10,
    },
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },
});
