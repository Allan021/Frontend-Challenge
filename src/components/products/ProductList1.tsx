import { Grid } from "@mui/material";
import { FC } from "react";
import { useResultsContext } from "../../contexts/";
import { ProductCard1 } from "./ProductCard1";
export const ProductList1: FC = () => {
  const { results } = useResultsContext();

  return (
    <>
      <Grid container spacing={3}>
        {results.map((product, i) => (
          <Grid item lg={4} sm={6} xs={12} key={i}>
            <ProductCard1 {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
