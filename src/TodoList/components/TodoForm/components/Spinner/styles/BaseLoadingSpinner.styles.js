import { css, keyframes } from "@vitality-ds/system";

const spinning = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export default css({
  display: "inline-block",
  width: 36,
  height: 36,

  "&:after": {
    content: " ",
    display: "block",
    width: 36,
    height: 36,
    margin: 0,
    borderRadius: "50%",
    border: "6px solid #fff",
    borderColor: " #fff transparent #fff transparent",
    animation: `${spinning} 1.2s linear infinite`,
  },
});
