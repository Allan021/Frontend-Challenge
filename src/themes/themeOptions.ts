import { components, themeColors, primary } from "./";
import { fontSize, fontFamily } from "./components";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};
export const typography = {
  fontSize,
  fontFamily,
  htmlFontSize: 16,
  body1: {
    fontSize,
  },
  body2: {
    fontSize,
  },
};
export const themeOptions: any = {
  typography,
  breakpoints,
  components: { ...components },
  palette: {
    primary: { ...primary, light: primary[100] },
    ...themeColors,
  },
};
