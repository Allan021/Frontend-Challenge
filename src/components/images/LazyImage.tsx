import { bgcolor, borderRadius, compose, spacing, styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImageProps {
  borderRadius?: number;
  src: string;
  width?: number;
  height?: number;
  layout?: string;
  objectFit?: string;
  alt?: string;
}

const LazyImage = styled(({ borderRadius, ...rest }: LazyImageProps) => (
  <LazyLoadImage {...rest} />
))(compose(spacing, borderRadius, bgcolor));
export default LazyImage;
