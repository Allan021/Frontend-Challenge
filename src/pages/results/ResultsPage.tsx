import { Box } from "@mui/material";
import { ResultsProvider } from "../../contexts";
import { SearchControllers, ResultsContainer } from "./components/";
import { NavBarLayout } from "../../components/layouts/";

const ResultsPage = () => {
  return (
    <NavBarLayout title="Results | Challenge">
      <ResultsProvider>
        <Box pt={2.5}>
          <SearchControllers />
          <ResultsContainer />
        </Box>
      </ResultsProvider>
    </NavBarLayout>
  );
};

export default ResultsPage;
