import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "utils/device";
// import { themeGet } from "@styled-system/theme-get";

export const BoxContent = styled.div`
  position: static;
  bottom: 30px;
  left: 34px;
  width: auto;
  z-index: 50;
  box-sizing: border-box;
`;
export const BoxCounter = styled.div`
  color: ${themeGet("colors.white", "#fff")};
  margin: 0 auto 0 0;
  transition: 0.35s;
  margin-bottom: 18px;
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 50%;
  background: transparent !important;
  font-size: 48px;
  opacity: 0.48;
  font-weight: 500;
  transform: translateY(-50%);
`;

export const BoxIcon = styled.div`
  font-size: 36px;
  line-height: 32px;
  position: relative;

  svg {
    height: 42px;
    display: block;
    transition: 0.35s;
    margin-bottom: 2px;
    color: ${themeGet("colors.white", "#fff")};
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  /* left: -10px; */
  position: relative;
  align-items: center;
`;

export const CategoryBox = styled(Link)`
  width: calc(25% - 20px);
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: left;
  padding: 25px;
  border-radius: 4px;
  border-left: 0.25rem solid ${themeGet("colors.primary.alternate", "#fff")} !important;
  transition: 0.35s;
  background: ${themeGet("colors.primary.regular", "#009E7F")};
  margin: 10px;
  position: relative;
  box-sizing: border-box;
  color: ${themeGet("colors.white", "#fff")};
  @media (max-width: 1289px) {
    width: calc(33% - 20px);
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 480px) {
    width: calc(100% - 20px);
    margin-right: 0;
  }
  &:hover {
    background: ${themeGet("colors.primary.hover", "#019376")};
    box-shadow: 0 4px 12px rgba(38, 174, 97, 0.35);
    opacity: 0.5;
    // color: #fff;
  }
`;

export const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;
  padding-top: 0 !important;
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const TitleB = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
`;

export const Path = styled.div`
  fill: white;
`;

export const Course = styled.div`
  background-color: ${themeGet("colors.white", "#FFF")};
  border-radius: 4px;
  box-shadow: ${themeGet("shadows.medium", "0 10px 10px rgba(0, 0, 0, 0.2)")};
  // width: 100%;
  display: flex;
  // flex-wrap: wrap;
  transition: padding-right 0.35s ease-in-out;
  padding-top: 0 !important;
  margin: 10px;

  border-left: 0.25rem solid ${themeGet("colors.primary.alternate", "#fff")} !important;

  // @media ${device.tablet} {
  //   width: 60%;
  // }
  // @media ${device.desktop} {
  //   width: 60%;
  // } ;
`;

export const H6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  background-color: ${themeGet("colors.primary.regular", "#009E7F")};
  color: ${themeGet("colors.white", "#FFF")};
  padding: 20px;
  max-width: 250px;
  text-align: center;
`;

export const P = styled.p`
  color: ${themeGet("colors.white", "#FFF")};
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
`;

export const PInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
  color: ${themeGet("colors.blue.dark", "#161F6A")};
`;

export const ProgressContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 150px;
`;

export const Progress = styled.div`
  background-color: ${themeGet("colors.gray.200", "#F7F7F7")};
  border-radius: 3px;
  height: 5px;
  width: 100%;
  &:after {
    border-radius: 3px;
    background-color: ${themeGet("colors.primary.regular", "#009E7F")};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    ${({ width }) =>
      width &&
      `
            width: ${width}%;
        `}
  }
`;

export const PText = styled.span`
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0 1rem;
`;
