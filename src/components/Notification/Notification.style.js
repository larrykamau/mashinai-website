import styled from "styled-components";
import { get } from "styled-system";

const getTitleStyle = ({ theme }) => {
  return get(theme, "typography.fontBold14");
};

const getTimeStyle = ({ theme }) => {
  return get(theme, "typography.font14");
};

const getHeadingStyle = ({ theme }) => {
  return get(theme, "typography.fontBold18");
};

const getClearStyle = ({ theme }) => {
  return get(theme, "typography.fontBold14");
};

const getDetailsStyle = ({ theme }) => {
  return get(theme, "typography.font14");
};

export const Header = styled.div(({ theme }) => ({
  // padding: "15px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #E6E6E6",
}));

export const Heading = styled.span(({ theme }) => ({
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.blue.dark"),
  ...getHeadingStyle({ theme }),
}));

export const ClearAll = styled.button(({ theme }) => ({
  outline: "0",
  border: "none",
  padding: "0",
  backgroundColor: "transparent",
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.secondary.alternate"),
  cursor: "pointer",
  ...getClearStyle({ theme }),
}));

export const Body = styled.div(({ theme }) => ({
  // padding: "0 30px",
  display: "flex",
  flexDirection: "column",
}));

export const Message = styled.div(({ theme }) => ({
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${get(theme, "colors.gray.500")}`,
  cursor: "pointer",
  ":last-child": {
    borderBottom: "0",
  },
}));

export const TitleWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: "5px",
}));

export const Dot = styled.span(({ theme }) => ({
  display: "flex",
  width: "4px",
  height: "4px",
  borderRadius: "2px",
  backgroundColor: get(theme, "colors.gray.700"),
  margin: "0 10px",
}));

export const Title = styled.span(({ theme }) => ({
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.blue.dark"),
  ...getTitleStyle({ theme }),
}));

export const Time = styled.span(({ theme }) => ({
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.blue.light"),
  ...getTimeStyle({ theme }),
}));

export const Details = styled.p(({ theme }) => ({
  margin: "0",
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.blue.light"),
  ...getDetailsStyle({ theme }),
}));

export const Footer = styled.div(({ theme }) => ({
  padding: "15px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid ${get(theme, "colors.gray.700")}`,
}));

export const FeedsButton = styled.button(({ theme }) => ({
  outline: "0",
  border: "none",
  padding: "0",
  backgroundColor: "transparent",
  fontFamily: get(theme, "typography.primaryFontFamily"),
  color: get(theme, "colors.primary.regular"),
  cursor: "pointer",
  ...getClearStyle({ theme }),
}));
