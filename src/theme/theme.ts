import { createTheme } from "@mui/material";

export const theme = createTheme({
  //   direction,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          fontFamily: "Roboto, Vazir",
          ".Toastify__toast ": {
            fontFamily: "Roboto, Vazir",
            background: "#ffffff",
          },
        },
        "input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
          {
            WebkitBoxShadow: "0 0 0 30px #ffffff inset !important",
          },
      },
    },
  },
  palette: {
    background: {
      default: "#f4f5fa",
      paper: "#ffffff",
    },
    primary: {
      main: "#297cbb",
    },
    secondary: {
      main: "#28243d",
      light: "rgb(40, 36, 61)",
    },
    text: {
      primary: "rgba(25, 25, 25, 0.9)",
    },
    // modalClose: { main: "rgba(53,53,53, 0.8)" },

    grey: {
      700: "#333333",
      600: "#4F4F4F",
      500: "#828282",
      400: "#BDBDBD",
      300: "#E0E0E0",
      200: "#f4f5fa",
      100: "#FFFFFF",
    },
    success: {
      main: "#3CB933",
      light: "#cfecd8",
    },
    error: {
      main: "#EB5757",
      light: "#FFCCCC",
    },
    warning: {
      main: "#F28F32",
      light: "#FFD2A9",
    },
    info: {
      main: "#2F80ED",
      light: "#8CC8EA",
    },
    // disable: {
    //   main: "rgb(138, 141, 147)",
    //   light: "rgba(138, 141, 147, 0.12)",
    // },

    divider: "rgba(231, 227, 252, 0.12)",
    // imgInputBg: "#0000001a",
  },

  typography: {
    fontFamily: "Vazir",
    fontSize: 16,
    h1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "37.5px",
      color: "#000",
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000",
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "23px",
      color: "#000",
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "19px",
      color: "#000",
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "23.87px",
      letterSpacing: "0.38px",
      color: "#000",
    },
    h6: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "14px",
      color: "#000",
    },
    button: {
      textTransform: "none",
    },
  },
});
