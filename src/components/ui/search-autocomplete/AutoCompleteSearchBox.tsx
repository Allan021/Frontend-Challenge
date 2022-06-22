/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { FicohsaButton } from "../buttons";
import { SearchOutlinedIcon } from "./input";

import { AutoCompleteOption } from "../../../models";

interface SearchBoxProps {
  onSearch?: (value: string) => void;
  items?: AutoCompleteOption[];
  initialValue: string;
}

export const AutoCompleteSearchBox = ({
  initialValue,
  onSearch,
  items,
}: SearchBoxProps) => {
  const [value, setValue] = useState("");
  const parentRef = useRef();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      onSubmit={(e: any) => {
        e.preventDefault();
        onSearch && onSearch(value);
      }}
      component={"form"}
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
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
