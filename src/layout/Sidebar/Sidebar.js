import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  SidebarWrapper,
  NavLink,
  MenuWrapper,
  Logo,
  Svg,
  LogoutBtn,
} from "./Sidebar.style";
import {
  DASHBOARD,
  EMPLOYEES,
  COMPANIES,
  ALLOWANCES,
  KRA,
  NHIF,
  NSSF,
  MPESA_REPORTS,
} from "settings/constants";
import { AuthContext } from "context/auth";

import {
  DashboardIcon,
  CustomerIcon,
  RefundIcon,
  SidebarCategoryIcon,
  MedicineIcon,
  CouponIcon,
  Members,
  SiteSettings,
  LogoutIcon,
} from "components/AllSvgIcon";

const sidebarMenus = [
  {
    name: "Dashboard",
    path: DASHBOARD,
    exact: true,
    icon: <DashboardIcon />,
  },
  {
    name: "Employees",
    path: EMPLOYEES,
    exact: false,
    icon: <CustomerIcon />,
  },
  {
    name: "Companies",
    path: COMPANIES,
    exact: false,
    icon: <Members />,
  },
  {
    name: "Allowances",
    path: ALLOWANCES,
    exact: false,
    icon: <SidebarCategoryIcon />,
  },
  {
    name: "KRA",
    path: KRA,
    exact: false,
    icon: <CouponIcon />,
  },
  {
    name: "NHIF",
    path: NHIF,
    exact: false,
    icon: <MedicineIcon />,
  },
  {
    name: "NSSF",
    path: NSSF,
    exact: false,
    icon: <RefundIcon />,
  },
  {
    name: "MPesa Reports",
    path: MPESA_REPORTS,
    exact: false,
    icon: <SiteSettings />,
  },
];

export default withRouter(function Sidebar({
  refs,
  style,
  isOpen,
  onMenuItemClick,
}) {
  const { signout } = useContext(AuthContext);
  console.log(isOpen);
  return (
    <SidebarWrapper ref={refs} style={style}>
      {isOpen ? (
        <Logo>
          <Link to="/">
            <h3 className="logo-header">Payer</h3>
          </Link>
        </Logo>
      ) : null}
      <MenuWrapper>
        {sidebarMenus.map((menu, index) => (
          <NavLink
            to={menu.path}
            key={index}
            exact={menu.exact}
            activeStyle={{
              borderRadius: "50px 0 0 50px",
            }}
            onClick={onMenuItemClick}
          >
            {menu.icon ? <Svg>{menu.icon}</Svg> : ""}
            {menu.name}
          </NavLink>
        ))}
      </MenuWrapper>

      <LogoutBtn
        onClick={() => {
          signout();
        }}
      >
        <Svg>
          <LogoutIcon />
        </Svg>
        Logout
      </LogoutBtn>
    </SidebarWrapper>
  );
});
