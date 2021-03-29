import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Text = styled.span`
  font-family: ${themeGet("fonts.body", "Lato")};
  font-size: ${themeGet("fontSizes.base", "15")}px;
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.label", "#909090")};
  margin-top: 15px;
  text-align: center;
`;

export const TextHighlighted = styled.span`
  color: ${themeGet("colors.primary.regular", "#652e8d")};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  border: 2px dashed ${themeGet("colors.gray.500", "#f1f1f1")};
  background-color: ${themeGet("colors.white", "#ffffff")};
  color: ${themeGet("colors.gray.900", "#bdbdbd")};
  outline: none;
  cursor: pointer;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
  border: 1px solid ${themeGet("colors.gray.500", "#f1f1f1")};
  display: inline-flex;
  border-radius: 2px;
  margin-bottom: 8px;
  // margin-right: 8px;
  width: 100%;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  margin: auto;
  height: 100%;
`;

export const PicInput = styled.div`
  margin-right: 8px;
  opacity: 1;

  color: #5f6368;
  fill: #5f6368;

  -webkit-user-select: none;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  border: 0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  height: 48px;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  width: 48px;
  z-index: 0;
`;
