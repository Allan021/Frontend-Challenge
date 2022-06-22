import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";
import { themeOptions } from "./themeOptions";
let appTheme: Theme;
export const theme = createTheme({
  ...themeOptions,
});

appTheme = responsiveFontSizes(theme);
appTheme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
appTheme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
appTheme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
appTheme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";

export default appTheme;
