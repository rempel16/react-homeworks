import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e4e5f1",
      contrastText: "#484b6a",
    },
    background: {
      default: "#FAFAFA",
    },
  },
});

export default LightTheme;
