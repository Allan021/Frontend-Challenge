import React from "react";
import { Box, styled } from "@mui/material";
import clsx from "clsx";

type TextTransformStyle = "uppercase" | "lowercase" | "capitalize";

interface HeadingsProps {
  children: React.ReactNode;
  className?: string;
  textTransform?: TextTransformStyle;
  ellipsis?: boolean;
}

const StyledBox = styled(Box)(({ textTransformStyle, ellipsis }: any) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));

export const H1 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: any) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="30px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
