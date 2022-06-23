import { Box, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { Product } from "../../models";
import { FlexBox, FlexRowCenter } from "../flex-box";
import { LazyImage } from "../images";
import ImageViewer from "react-simple-image-viewer";
import { FichosaAvatar } from "../ui/avatar/FichosaAvatar";
import { H1, H2, H6 } from "../ui/typography";
import { FichosaRating } from "../ui/rating/FichosaRating";

interface ProductIntroProps {
  product: Product;
}

export const ProductIntro = ({ product }: ProductIntroProps) => {
  const { brand, price, title, imgGroup, image } = product;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const handleImageClick = (ind: number) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <LazyImage
              width={300}
              alt={title}
              cursor="pointer"
              height={300}
              src={product.imgGroup ? product.imgGroup[selectedImage] : image}
              onClick={() => {
                if (!imgGroup) return;
                openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]));
              }}
            />
            {isViewerOpen && (
              <ImageViewer
                src={imgGroup || []}
                onClose={closeImageViewer}
                currentIndex={currentImage}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  zIndex: 1501,
                }}
              />
            )}
          </FlexBox>
          <FlexBox overflow="auto">
            {imgGroup.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleImageClick(ind)}
                mr={ind === imgGroup.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <FichosaAvatar src={url} variant="square" height={40} />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>
        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{title}</H1>

          {brand && (
            <FlexBox alignItems="center" mb={2}>
              <Box>Brand:</Box>
              <H6 ml={1} transform="capitalize">
                {brand}
              </H6>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <FichosaRating
                color="warn"
                fontSize="1.25rem"
                value={4}
                readOnly
              />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              ${price.toFixed(2)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
