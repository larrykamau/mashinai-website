import styled from "styled-components";
import { get } from "styled-system";

export const LayoutWrapper = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
}));

export const ContentWrapper = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: get(theme, "colors.gray.200"),
}));

export const ContentInnerWrapper = styled.div(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: "45px 30px",
  overflow: "hidden",
  overflowY: "auto",

  "@media only screen and (max-width: 767px)": {
    padding: "45px 15px",
  },
}));
