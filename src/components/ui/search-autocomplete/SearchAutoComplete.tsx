/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from "react";
import { Box, debounce, MenuItem, TextField } from "@mui/material";
import { FicohsaButton } from "../buttons";
import { SearchOutlinedIcon } from "./input";

export const SearchBox = () => {
  const [resultList, setResultList] = useState([]);
  const parentRef = useRef();

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          endAdornment: (
            <FicohsaButton
              color="primary"
              variant="contained"
              disableElevation
              sx={{
                px: "3rem",
                height: "100%",
                borderRadius: "0 300px 300px 0",
              }}
            >
              Search
            </FicohsaButton>
          ),
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />
    </Box>
  );
};

const dummySearchResult = [
  "Macbook Air 13",
  "Asus K555LA",
  "Acer Aspire X453",
  "iPad Mini 3",
];
