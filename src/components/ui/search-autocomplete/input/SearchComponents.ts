import { SearchOutlined } from "@mui/icons-material";
import { Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchAutoCompleteInput = styled(TextField)({
  height: 44,
  borderRadius: 300,
  paddingRight: 0,
  color: "grey.700",
  overflow: "hidden",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
  },
});

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 21,
}));

export const ClearSearchWrapper = styled("div")(({ theme }) => ({}));
export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
})); // also used in the GrocerySearchBox component
