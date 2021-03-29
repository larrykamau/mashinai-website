import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { device } from "utils/device";

export const Card = styled.div`
  background-color: ${themeGet("colors.white", "#FFF")};
  border-radius: 4px;
  box-shadow: ${themeGet("shadows.medium", "0 10px 10px rgba(0, 0, 0, 0.2)")};
  // width: 100%;
  display: flex;
  // flex-wrap: wrap;
  transition: padding-right 0.35s ease-in-out;
  padding-top: 0 !important;
  margin: 10px 0;
  position: relative;
  border-left: 0.25rem solid ${themeGet("colors.primary.alternate", "#fff")} !important;

  // @media ${device.tablet} {
  //   width: 60%;
  // }
  // @media ${device.desktop} {
  //   width: 60%;
  // } ;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  border: 5px solid ${themeGet("colors.white", "#fff")};
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);

  top: 15px;
  left: 17vw;
`;
export const ImgPortada = styled.div`
  width: 100%;
`;

export const Portada = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themeGet("colors.primary.regular", "#009E7F")};
  background-position: bottom center;
  background-size: cover;
`;

export const Title = styled.div`
  padding: 1rem;
  text-align: right;
  color: ${themeGet("colors.primary.regular", "#009E7F")};
  font-weight: bold;
  font-size: 12px;
`;
export const Desc = styled.div`
  padding: 0.5rem 1rem;
  font-size: 12px;
`;

export const SVG = styled.div`
  width: 85px;
  height: 85px;
  margin: 0 auto;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #8bc34a;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #4caf50;
    transform: rotate(22deg);
  }
`;
export const H2 = styled.h2`
  margin: 0;
  padding: 0 1rem;
  text-align: right;
  color: ${themeGet("colors.blue.dark", "#161F6A")};
`;

export const Left = styled.div`
  background-color: ${themeGet("colors.primary.regular", "#009E7F")};
  color: ${themeGet("colors.white", "#FFF")};
  padding: 20px;
  min-width: 20vw;
  text-align: center;
`;
export const TitleB = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
  width: 100%;
`;
