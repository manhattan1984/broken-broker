import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#ffff8d",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
};

export const SignUpTextField = styled(TextField)({
  width: "100%",
  marginTop: 20,
});
export const SignUpButton = styled(Button)({
  marginTop: 20,
});
