/* eslint-disable react-hooks/exhaustive-deps */
import { Add } from "@mui/icons-material";
import { Box, Button, Chip, styled } from "@mui/material";

import { Product } from "../../models";
import { FlexBox } from "../flex-box";

import { FichosaCard } from "../ui/card";
import { Link } from "react-router-dom";
import { H3, Span } from "../ui/typography";
import { FichosaRating } from "../ui/rating";
import { LazyImage } from "../images/LazyImage";

const StyledCard = styled(FichosaCard)(() => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

const StyledImage = styled(LazyImage)(() => ({
  boxSizing: "border-box",
  padding: 0,
  margin: "auto",
  display: "block",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  minHeight: "100%",
  minWidth: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
}));

interface Props extends Product {
  hoverEffect?: boolean;
  hideRating?: boolean;
  showProductSize?: boolean;
}

export const ProductCard1 = ({
  id,
  name,
  price,
  image,
  rating = 5,
  hideRating,
  hoverEffect,
  discount = 5,
  showProductSize,
}: Props) => {
  return (
    <StyledCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <StyledChip color="primary" size="small" label={`${discount}% off`} />

        <Link to={`/items/${id}`}>
          <StyledImage src={image} alt={name} />
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link to={`/items/${id}`}>
              <H3
                mb={1}
                title={name}
                fontSize="14px"
                fontWeight="600"
                className="title"
                color="text.secondary"
              >
                {name}
              </H3>
            </Link>

            {!hideRating && (
              <FichosaRating value={rating || 0} color="warn" readOnly />
            )}

            {showProductSize && (
              <Span color="grey.600" mb={1} display="block">
                300ml
              </Span>
            )}

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box fontWeight="600" color="primary.main">
                ${(price - (price * discount) / 100).toFixed(2)}
              </Box>

              {!!discount && (
                <Box color="grey.600" fontWeight="600">
                  <del>{price?.toFixed(2)}</del>
                </Box>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            className="add-cart"
            flexDirection="column-reverse"
            justifyContent={"flex-start"}
          >
            <Button
              color="primary"
              variant="outlined"
              sx={{
                padding: "3px",
              }}
            >
              <Add fontSize="small" />
            </Button>
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledCard>
  );
};
