import React from "react";
import useComponentSize from "utils/useComponentSize";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import DrawerItems from "containers/DrawerItems/DrawerItems";
import { DrawerProvider } from "context/DrawerContext";
import {
  LayoutWrapper,
  ContentWrapper,
  ContentInnerWrapper,
} from "./Layout.style";
import { useDeviceType } from "utils/useDeviceType";
import styled from "styled-components";

const SidedbarDesktop = styled.div`
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const AdminLayout = ({ children, ...rest }) => {
  let [topbarRef, { height }] = useComponentSize();
  let [sidebarRef, { width }] = useComponentSize();
  const { desktop } = useDeviceType();

  return (
    <DrawerProvider>
      <Topbar refs={topbarRef} {...rest} />
      <LayoutWrapper
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
      >
        {desktop ? (
          <>
            <SidedbarDesktop>
              <Sidebar
                refs={sidebarRef}
                style={{
                  height: `calc(100vh - ${height}px)`,
                }}
              />
            </SidedbarDesktop>
            <ContentWrapper
              style={{
                width: `calc(100% - ${width}px)`,
              }}
            >
              <ContentInnerWrapper>{children}</ContentInnerWrapper>
            </ContentWrapper>
          </>
        ) : (
          <ContentWrapper
            style={{
              width: "100%",
            }}
          >
            <h3>
              width: {width} , height: {height}
            </h3>
            <ContentInnerWrapper>{children}</ContentInnerWrapper>
          </ContentWrapper>
        )}
      </LayoutWrapper>
      <DrawerItems />
    </DrawerProvider>
  );
};

export default AdminLayout;
