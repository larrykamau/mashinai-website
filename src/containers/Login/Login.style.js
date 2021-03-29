import styled from "styled-components";
import { get } from "styled-system";

export const Wrapper = styled.div(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: get(theme, "colors.gray.200"),

  "@media only screen and (max-width: 520px)": {
    backgroundColor: get(theme, "colors.white"),
  },
}));

export const FormWrapper = styled.div(({ theme }) => ({
  width: "470px",
  borderRadius: "3px",
  backgroundColor: get(theme, "colors.white"),
  padding: "50px",
  display: "flex",
  flexDirection: "column",

  "@media only screen and (max-width: 500px)": {
    width: "100%",
    padding: "30px",
  },
}));

export const LogoWrapper = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
}));

export const LogoImage = styled.img(() => ({
  display: "block",
  backfaceVisibility: "hidden",
  maxWidth: "150px",
}));
export const Title = styled.h3(({ theme }) => ({
  textAlign: "center",
  color: get(theme, "colors.blue.dark"),
  marginBottom: 0,
  marginTop: 0,
  lineHeight: 1.5,
  fontWeight: 400,
  fontSize: "18px",
}));

export const HeaderLogo = styled.h1(({ theme }) => ({
  textAlign: "center",
  color: get(theme, "colors.primary.regular"),
  marginBottom: 0,
  marginTop: 0,
  lineHeight: 1.5,
  // textTransform: "uppercase",
  fontWeight: get(theme, "fontWeights.bolder"),
  fontFamily: `Cousine, "Courier New", Courier, monospace !important`,
}));
