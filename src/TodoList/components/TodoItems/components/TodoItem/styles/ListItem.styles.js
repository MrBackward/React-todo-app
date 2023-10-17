import { css } from "@vitality-ds/system";

export default css({
  color: "#000",
  backgroundColor: "#FFFF88",
  padding: 15,
  borderRadius: 5,
  wordWrap: "break-word",
  width: 350,

  "&:hover": {
    backgroundColor: "#ff7eb9",
    cursor: "pointer",
  },

  h3: {
    fontSize: "1.25rem",
    margin: 0,
    marginBottom: 5,
  },

  p: {
    fontSize: "0.875rem",
    margin: 0,
    marginBottom: 5,
    whiteSpace: "pre",
    wordWrap: "break-word",
  },

  small: {
    fontSize: "0.75rem",
  },
});
