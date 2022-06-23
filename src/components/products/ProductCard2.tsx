import { Card, Grid, styled, Box, Chip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../models";
import { FlexBox } from "../flex-box";
import { FichosaImage } from "../images/FichosaImage";
import { H5, Span } from "../ui/typography";

const Wrapper = styled(Card)(() => ({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  marginBottom: "1.25rem",
  display: "flex",
}));
interface Props extends Product {
  off?: number;
  hideRating?: boolean;
  showProductSize?: boolean;
}

export const ProductCard2 = ({
  image,
  name,
  price,
  off,
  rating,
  id,
}: Props) => {
  return (
    <Wrapper>
      <Grid container spacing={1}>
        <Grid item sm={3} xs={12}>
          <Box position="relative">
            {!!off && (
              <Chip
                size="small"
                color="primary"
                label={`${off}% off`}
                sx={{
                  top: 15,
                  left: 15,
                  px: "5px",
                  fontSize: 10,
                  fontWeight: 600,
                  position: "absolute",
                }}
              />
            )}

            <Link to={`/items/${id}`}>
              <FichosaImage
                src={image}
                alt={name}
                width="100%"
                sx={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        </Grid>

        <Grid item sm={9} xs={12}>
          <FlexBox
            flexDirection="column"
            justifyContent="center"
            height="100%"
            p={2}
          >
            <Link to={`/items/${id}`}>
              <H5 fontWeight="600" my="0.5rem">
                {name}
              </H5>
            </Link>

            <Rating value={rating || 0} color="warn" readOnly />

            <FlexBox mt={1} mb={2} alignItems="center">
              <H5 fontWeight={600} color="primary.main" mr={1}>
                ${price?.toFixed(2)}
              </H5>

              {off && (
                <Span fontWeight="600" color="grey.600">
                  <del>${(price - (price * off) / 100).toFixed(2)}</del>
                </Span>
              )}
            </FlexBox>
          </FlexBox>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
