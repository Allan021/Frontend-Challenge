import { alpha, styled as stylesMui } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import styled from "@emotion/styled";

const listOpacity = alpha("#7e1754", 0.85);

export const ResultsList = stylesMui("ul")(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  border: "1px solid #7e1754",
  padding: 0,
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflowY: "auto",
  boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2)",

  height: 44,
  borderRadius: 300,
  paddingRight: 0,
  color: "grey.700",
  overflow: "hidden",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
  },
  "& p": {
    margin: 0,
    marginBottom: "0.2rem",
    textTransform: "capitalize",
    paddingLeft: ".5rem",
    fontSize: "1.1rem",
    paddingTop: ".5rem",

    fontWeight: "bold",
  },

  "& li": {
    margin: "0",
    borderBottom: "1px solid #7e1754",
    padding: "0.2rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      color: "white",
      backgroundColor: listOpacity,
    },

    "& p": {
      margin: "0",
      padding: "0",
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1",
    },

    "& div:first-of-type": {
      paddingTop: "0.4rem",
      paddingLeft: "0.4rem",
      paddingBottom: "0.3rem",
    },

    "& span": {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: "0.8rem",
    },
  },
  [`& li.${autocompleteClasses.focused}`]: {
    color: "white",
    backgroundColor: listOpacity,

    "& span": {
      color: "#dee",
    },
  },
  "& li:active": {
    color: "white",
    backgroundColor: listOpacity,
  },
}));

export const ResultImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  margin: 0;
`;
