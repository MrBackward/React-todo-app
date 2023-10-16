import { css } from "@vitality-ds/system";

export default css({
  padding: 10,
  backgroundColor: "#0066FF",
  color: "#FFF",
  borderRadius: 5,
  width: 300,
  border: "2px solid #0066FF",

  "&:hover": {
    backgroundColor: "#003399",
    border: "2px solid #003399",
    cursor: "pointer",
  },
});
