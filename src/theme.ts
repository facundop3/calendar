import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

export const hoverColor = theme("mode", {
  light: "#fafafa",
  dark: "grey"
});

export const oppositeBlue = theme("mode", {
  light: "#191970",
  dark: "#0094d5"
});
