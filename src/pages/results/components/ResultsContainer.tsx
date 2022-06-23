import { Grid } from "@mui/material";

import { ProductList1, ProductList2 } from "../../../components/products";
import { useResultsContext } from "../../../contexts";

export const ResultsContainer = () => {
  const { view } = useResultsContext();

  return (
    <Grid container spacing={3} px={5}>
      {view === "grid" ? <ProductList1 /> : <ProductList2 />}
    </Grid>
  );
};
