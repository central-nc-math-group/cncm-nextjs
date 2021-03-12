import { createMuiTheme } from "@material-ui/core";
import { Theme } from "../types";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0c54c7",
    },
    secondary: {
      main: "#0c54c7",
      light: "#1d66db",
    },
    error: {
      main: "#f3ad5a",
    },
    warning: {
      main: "#3d7eb3",
    },
    info: {
      main: "#b03b7a",
    },
    success: {
      main: "#ceddf1",
    },
  },
});

export default theme;
