import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { NavBarLayout } from "../../components/layouts";
import { ProductIntro, ProductDescription } from "../../components/products";
import { Reload } from "../../components/ui/loader";
import { StyledTabs } from "../../components/ui/tabs";
import { H2 } from "../../components/ui/typography";
import { useProductDetails } from "../../contexts";
import { LoadingPage } from "../loading";

export const ProductDetailsView = () => {
  const { product, isLoading } = useProductDetails();
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_: any, newValue: number) => {
    setSelectedOption(newValue);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <NavBarLayout title={product?.name || ""}>
      {!!product ? (
        <ProductIntro product={product} />
      ) : (
        <H2>Product not found</H2>
      )}
      <StyledTabs
        textColor="primary"
        value={selectedOption}
        indicatorColor="primary"
        onChange={handleOptionClick}
      >
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      {!!product && (
        <Box mb={6}>
          {selectedOption === 0 && (
            <ProductDescription specifications={product.specification} />
          )}
        </Box>
      )}
    </NavBarLayout>
  );
};
