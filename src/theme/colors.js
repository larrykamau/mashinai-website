export const lightColors = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    100: "#f9f9f9",
    200: "#F7F7F7",
    300: "#f4f4f4",
    400: "#F3F3F3",
    500: "#f1f1f1", // border alt color
    600: "#EdEdEd",
    700: "#E6E6E6", // border color
    800: "#C2C3CC",
    900: "#bdbdbd",
  },
  text: {
    bold: "#0D1136", // heading color
    medium: "#424561",
    regular: "#77798C", // regular text color
    light: "#909090",
    label: "#767676",
  },
  transparent: "transparent",
  primary: {
    regular: "#009E7F", // primary color
    hover: "#019376",
    alternate: "#028489",
    light: "#b7dbdd",
  },
  secondary: {
    regular: "#ff5b60",
    hover: "#FF282F",
    alternate: "#fc5c63",
  },
  yellow: {
    regular: "#FFAD5E",
    hover: "#FFB369",
    alternate: "#f4c243",
  },
  blue: {
    regular: "#2e70fa",
    dark: "#161F6A",
    light: "#666D92",
    link: "#4285f4",
  },
  shadows: {
    base: "0 3px 6px rgba(0, 0, 0, 0.2)",
    medium: "0 6px 12px rgba(0, 0, 0, 0.2)",
    big: "0 21px 36px rgba(0, 0, 0, 0.2)",
    header: "0 1px 2px rgba(0, 0, 0, 0.06)",
  },
  red: "#ea4d4a",
  success: "",
  warning: "",
  muted: "",
  highlight: "",
};
export const darkColors = {
  white: "#1c1c1c",
  black: "#000000",
  gray: {
    100: "#f9f9f9",
    200: "#2D2D2D",
    300: "#f4f4f4",
    400: "#F3F3F3",
    500: "#f1f1f1", // border alt color
    600: "#EdEdEd",
    700: "#E6E6E6", // border color
    800: "#C2C3CC",
    900: "#bdbdbd",
  },
  text: {
    bold: "#B9B9B9", // heading color
    medium: "#424561",
    regular: "#77798C", // regular text color
    light: "#909090",
    label: "#767676",
  },
  transparent: "transparent",
  primary: {
    regular: "#009E7F", // primary color
    hover: "#019376",
    alternate: "#028489",
    light: "#b7dbdd",
  },
  secondary: {
    regular: "#ff5b60",
    hover: "#FF282F",
    alternate: "#fc5c63",
  },
  yellow: {
    regular: "#FFAD5E",
    hover: "#FFB369",
    alternate: "#f4c243",
  },
  blue: {
    regular: "#2e70fa",
    dark: "#7C7C7C",
    light: "#666D92",
    link: "#4285f4",
  },
  shadows: {
    base: "0 3px 6px rgba(255, 255, 255, 0.2)",
    medium: "0 6px 12px rgba(255, 255, 255, 0.2)",
    big: "0 21px 36px rgba(255, 255, 255, 0.2)",
    header: "0 1px 2px rgba(255, 255, 255, 0.06)",
  },
  red: "#ea4d4a",
  success: "",
  warning: "",
  muted: "",
  highlight: "",
};

export const baseColor =
  localStorage.getItem("theme") === "light" ? lightColors : darkColors;
