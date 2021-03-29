import React, { useCallback } from "react";
import styled from "styled-components";
import { get } from "styled-system";
import Drawer from "components/Drawer/Drawer";
import { CloseIcon } from "components/AllSvgIcon";
import { useDrawerState, useDrawerDispatch } from "context/DrawerContext";

/** Drawer Components */
import Sidebar from "layout/Sidebar/Sidebar";
import { themeGet } from "@styled-system/theme-get";
import EditPostEmployee from "containers/Employees/EditPostEmployee";

/** Components Name Constants */
const DRAWER_COMPONENTS = {
  SIDEBAR: Sidebar,
  EDIT_POST_EMPLOYEE: EditPostEmployee,
};

const CloseButton = styled.button(({ theme }) => ({
  color: get(theme, "colors.blue.light"),
  lineHeight: 1.2,
  outline: "0",
  border: "none",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "10px",
  left: "-30px",
  right: "auto",
  cursor: "pointer",
  backgroundColor: "#ffffff",
  width: "20px",
  height: "20px",
  borderRadius: "50%",

  "@media only screen and (max-width: 767px)": {
    left: "auto",
    right: "30px",
    top: "29px",
  },
}));

export default function DrawerItems() {
  const isOpen = useDrawerState("isOpen");
  const drawerComponent = useDrawerState("drawerComponent");
  const data = useDrawerState("data");
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [
    dispatch,
  ]);
  if (!drawerComponent) {
    return null;
  }
  const SpecificContent = DRAWER_COMPONENTS[drawerComponent];

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      overrides={{
        Root: {
          style: {
            zIndex:
              DRAWER_COMPONENTS[drawerComponent] ===
              DRAWER_COMPONENTS.STAFF_MEMBER_FORM
                ? 0
                : 2,
          },
        },
        DrawerBody: {
          style: {
            marginTop: "80px",
            marginLeft: "60px",
            marginRight: "60px",
            marginBottom: "30px",
            "@media only screen and (max-width: 767px)": {
              marginTop: "80px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            },
          },
        },
        DrawerContainer: {
          style: {
            width: "70vw",
            backgroundColor: themeGet("colors.gray.200", "#2d2d2d"),
            "@media only screen and (max-width: 767px)": {
              width: "100%",
            },
          },
        },
        Close: {
          component: () => (
            <CloseButton onClick={closeDrawer}>
              <CloseIcon width="6px" height="6px" />
            </CloseButton>
          ),
        },
      }}
    >
      <SpecificContent onClose={closeDrawer} data={data} />
    </Drawer>
  );
}
