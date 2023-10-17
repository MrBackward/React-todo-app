import { css } from "@vitality-ds/system";

export default css({
  padding: 8,
  borderRadius: 5,
  border: "2px solid #fff",
  fontFamily: "sans-serif",

  "&:hover": {
    backgroundColor: "#ededed",
    border: "2px solid #cdcdcf",
  },

  "&:focus": {
    outline: "none",
    backgroundColor: "#f5f5f5",
    border: "2px solid #0066ff",
  },

  variants: {
    isTextarea: {
      true: {
        resize: "vertical",
        wordWrap: "break-word",
        whiteSpace: "pre",
        textWrap: "balance",
      },
    },
  },
});
