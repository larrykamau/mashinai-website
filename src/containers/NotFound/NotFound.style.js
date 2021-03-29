import styled from "styled-components";
import { get } from "styled-system";

export const NoResultWrapper = styled.div(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 20px",
}));

export const NoResultMsg = styled.h3(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  color: get(theme, "colors.blue.dark"),
  margin: "0 0 15px",
}));

export const ImageWrapper = styled.div(({ theme }) => ({
  marginTop: "50px",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Image = styled.img(({ theme }) => ({
  maxWidth: "100%",
}));
