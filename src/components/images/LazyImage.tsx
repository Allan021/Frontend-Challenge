import { bgcolor, borderRadius, compose, spacing, styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImageProps {
  borderRadius?: number;
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  layout?: string;
  alt?: string;
  cursor?: string;
}

export const LazyImage = styled(({ borderRadius, ...rest }: LazyImageProps) => (
  <LazyLoadImage
    {...rest}
    style={{
      cursor: "pointer",
    }}
  />
))(compose(spacing, borderRadius, bgcolor));
