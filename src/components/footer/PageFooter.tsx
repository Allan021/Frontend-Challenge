import { Container, Grid, styled, SxProps, Theme } from "@mui/material";
import { FichosaImage } from "../images/FichosaImage";
import { Paragraph } from "../ui/typography";
import { Link } from "react-router-dom";
import { H3, H5 } from "../ui/typography/Typography";
import { FlexRowCenter } from "../flex-box/FlexRowCenter";

const StyledFooter = styled("footer")(({ theme, bgcolor }: any) => ({
  color: "white",
  padding: "40px",
  background: bgcolor ? bgcolor : theme.palette.secondary.main,
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem",
  },
}));
const StyledLink = styled("a")(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[300],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

interface FooterProps {
  bgcolor?: string;
  sx?: SxProps<Theme>;
  id?: string;
}
export const PageFooter = ({ sx, id }: FooterProps) => {
  return (
    <StyledFooter id={id} sx={sx}>
      <Container>
        <Link to="/">
          <H3
            style={{
              cursor: "pointer",
            }}
          >
            Fichosa
          </H3>
        </Link>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Challenge de programmation web 2022
            </Paragraph>
          </Grid>
        </Grid>

        <FlexRowCenter>
          <Paragraph color="grey.100" maxWidth="370px" fontWeight="700">
            CopyRigth © {new Date().getFullYear()} Allan Aceituno
          </Paragraph>
        </FlexRowCenter>
      </Container>
    </StyledFooter>
  );
};
