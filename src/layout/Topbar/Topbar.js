import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popover from "components/Popover/Popover";
import Notification from "components/Notification/Notification";
import { AuthContext } from "context/auth";
// import { STUFF_MEMBERS, SETTINGS } from "settings/constants";
import {
  NotificationIcon,
  AlertDotIcon,
  ArrowLeftRound,
} from "components/AllSvgIcon";
import {
  TopbarWrapper,
  Logo,
  // LogoImage,
  TopbarRightSide,
  ProfileImg,
  Image,
  AlertDot,
  NotificationIconWrapper,
  UserDropdowItem,
  // NavLink,
  LogoutBtn,
  DrawerIcon,
  CloseButton,
  DrawerWrapper,
} from "./Topbar.style";
import UserImage from "image/user.jpg";
import { MenuIcon } from "components/AllSvgIcon";
import Drawer from "components/Drawer/Drawer";
import Sidebar from "../Sidebar/Sidebar";
import { useDeviceType } from "utils/useDeviceType";
import Toggle from "containers/Toggle/Toggle";

const data = [
  {
    title: "Payment Successful",
    time: "5m",
    message: "T_ID: PC85W5656W",
  },
];
const Topbar = ({ refs, theme, toggleTheme }) => {
  const userAgent = navigator.userAgent;
  const deviceType = useDeviceType(userAgent);
  const { signout } = React.useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <TopbarWrapper ref={refs}>
      <Logo>
        <Link to="/">
          <h3 className="logo-header">Payer</h3>
        </Link>
      </Logo>

      <DrawerWrapper>
        <DrawerIcon onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </DrawerIcon>
        <Drawer
          open={isDrawerOpen}
          anchor={"left"}
          onClose={() => setIsDrawerOpen(false)}
          overrides={{
            Root: {
              style: {
                zIndex: "1",
              },
            },
            DrawerBody: {
              style: {
                marginRight: "0",
                marginLeft: "0",
                "@media only screen and (max-width: 767px)": {
                  marginLeft: "30px",
                },
              },
            },
            DrawerContainer: {
              style: {
                width: "270px",
                "@media only screen and (max-width: 767px)": {
                  width: "80%",
                },
              },
            },
            Close: {
              component: () => (
                <CloseButton onClick={() => setIsDrawerOpen(false)}>
                  <ArrowLeftRound />
                </CloseButton>
              ),
            },
          }}
        >
          <Sidebar
            isOpen={isDrawerOpen}
            onMenuItemClick={() => setIsDrawerOpen(false)}
          />
        </Drawer>
      </DrawerWrapper>

      <TopbarRightSide>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <NotificationIconWrapper>
          {deviceType.desktop ? (
            <Popover
              direction="right"
              content={<Notification data={data} />}
              accessibilityType={"tooltip"}
              placement={"bottomRight"}
              handler={
                <>
                  <NotificationIcon color={`#009E7F`} />
                  <AlertDot>
                    <AlertDotIcon color={`#009E7F`} />
                  </AlertDot>
                </>
              }
            />
          ) : null}
        </NotificationIconWrapper>
        <Popover
          direction="right"
          content={
            <UserDropdowItem>
              {/* <NavLink to={STUFF_MEMBERS} exact={false} onClick={close}>
                Staff
              </NavLink>
              <NavLink to={SETTINGS} exact={false} onClick={close}>
                Settings
              </NavLink> */}
              <LogoutBtn
                onClick={() => {
                  signout();
                }}
              >
                Logout
              </LogoutBtn>
            </UserDropdowItem>
          }
          accessibilityType={"tooltip"}
          placement={"bottomRight"}
          handler={
            <ProfileImg>
              <Image src={UserImage} alt="user" />
            </ProfileImg>
          }
        />
      </TopbarRightSide>
    </TopbarWrapper>
  );
};

export default Topbar;
