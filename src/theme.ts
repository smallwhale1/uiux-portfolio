import "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EF5727",
      // main: "#df2b08",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "1rem 1.5rem",
          borderRadius: 0,
          boxShadow: "0px 0px 15px #ff2e2e55",
        },
      },
    },
  },
});
