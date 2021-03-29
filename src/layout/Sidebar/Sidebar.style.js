import styled from "styled-components";
import { NavLink as NavLinks } from "react-router-dom";
import { get } from "styled-system";

export const SidebarWrapper = styled.div(({ theme }) => ({
  width: "270px",
  height: "100%",
  display: "flex",
  flexShrink: "0",
  backgroundColor: get(theme, "colors.white"),
  flexDirection: "column",
  borderRight: `1px solid ${get(theme, "colors.white")}`,

  "@media only screen and (max-width: 767px)": {
    // width: 'calc(100% - 65px)',
    width: "auto",
    padding: "0",
    height: "100%",
  },
}));

export const MenuWrapper = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "45px 0",
  overflowY: "auto",

  "@media only screen and (max-width: 767px)": {
    padding: "20px 0",
    // alignItems: 'flex-start',
  },
}));
const getFontStyle = ({ theme }) => {
  return get(theme, "typography.fontBold16");
};

export const NavLink = styled(NavLinks)(({ theme }) => ({
  ...getFontStyle({ theme }),
  width: "calc(100% - 30px)",
  outline: "0",
  color: get(theme, "colors.blue.dark"),
  display: "flex",
  alignItems: "center",
  padding: "20px 55px 20px 30px",
  textDecoration: "none",
  transition: "0.15s ease-in-out",

  "@media only screen and (max-width: 767px)": {
    width: "100%",
    padding: "20px 35px",
  },

  "&.active": {
    color: get(theme, "colors.primary.regular"),
    backgroundColor: get(theme, "colors.gray.200"),
    borderRadius: "50px 0 0 50px",
  },
}));

export const Svg = styled.span(({ theme }) => ({
  width: "16px",
  marginRight: "15px",
  display: "flex",
  alignItems: "center",
}));

export const Logo = styled.span(({ theme }) => ({
  padding: "20px",
  "@media only screen and (max-width: 767px)": {
    padding: "20px",
  },
  "@media only screen and (max-width: 1440px)": {
    padding: "20px 45px",
  },
}));

export const LogoutBtn = styled.button(({ theme }) => ({
  ...getFontStyle({ theme }),
  width: "calc(100% - 30px)",
  outline: "0",
  color: get(theme, "colors.blue.dark"),
  backgroundColor: "transparent",
  border: "0",
  display: "flex",
  alignItems: "center",
  padding: "20px 55px 20px 30px",
  textDecoration: "none",
  transition: "0.15s ease-in-out",
  marginLeft: "auto",
  marginTop: "auto",
  marginBottom: "25px",
  cursor: "pointer",

  "@media only screen and (max-width: 767px)": {
    width: "100%",
    padding: "20px 35px",
  },
}));
