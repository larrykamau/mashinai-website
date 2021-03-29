import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ActionButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5px;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: ${themeGet("colors.white", "#ffffff")};

  &.edit-btn {
    background-color: #85ff86;
  }
  &.delete-btn {
    background-color: #ffa5a5;
  }
  &.view-btn {
    background-color: #00ecff;
  }

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;
