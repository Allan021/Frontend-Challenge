import { Grid } from "@mui/material";
import { FC } from "react";
import { useResultsContext } from "../../contexts";
import { ProductCard2 } from "./ProductCard2";
export const ProductList2: FC = () => {
  const { results } = useResultsContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={8}>
        {results.map((product, i) => (
          <ProductCard2 {...product} key={i} />
        ))}
      </Grid>
    </Grid>
  );
};
