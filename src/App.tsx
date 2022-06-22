import { ThemeProvider } from "@mui/material";
import { MainRoutes } from "./routes/MainRoutes";
import { appTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
