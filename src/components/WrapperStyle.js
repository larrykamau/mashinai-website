import styled from "styled-components";
import { get } from "styled-system";

export const Wrapper = styled.div(() => ({
  backgroundColor: "#ffffff",
}));

export const Header = styled.header(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "0 1 auto",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "40px",
  /* margin-bottom: 40px, */
  backgroundColor: "#ffffff",

  "@media only screen and (max-width: 990px)": {
    padding: "20px",
  },
}));

export const Heading = styled.h2(({ theme }) => ({
  color: get(theme, "colors.blue.dark"),
  margin: 0,
}));

export const ButtonWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
}));
