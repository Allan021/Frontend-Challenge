import { Grid } from "@mui/material";
import { ProductList1 } from "../../../components/products";
import { useResultsPage } from "../../../hooks";

export const ResultsContainer = () => {
  const { view } = useResultsPage();
  return (
    <Grid container spacing={3} px={5}>
      {view === "grid" ? <ProductList1 /> : <></>}
    </Grid>
  );
};
