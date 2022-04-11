import styled from "@emotion/styled";
import { Button, createTheme, TextField } from "@mui/material";

export const themeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: '#ffd54f',
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
};

export const darkTheme = createTheme(themeOptions);

export const SignUpTextField = styled(TextField)({
  width: "100%",
  marginTop: 20,
});
export const SignUpButton = styled(Button)({
  marginTop: 20,
});
