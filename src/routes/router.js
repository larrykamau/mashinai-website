import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { LOGIN, DASHBOARD, EMPLOYEES, EMPLOYEE } from "settings/constants";
import { InLineLoader } from "components/InlineLoader/InlineLoader";
import { PrivateRoute } from "./PrivateRoute";
import AuthProvider from "context/auth";
import { Modal } from "@redq/reuse-modal";

import {
  COMPANIES,
  ALLOWANCES,
  KRA as kra,
  NHIF as nhif,
  NSSF as nssf,
  MPESA_REPORTS,
} from "settings/constants";
import Employee from "containers/Employees/Employee";

const Dashboard = lazy(() => import("containers/Dashboard/Dashboard"));
const Employees = lazy(() => import("containers/Employees/Employees"));

const Login = lazy(() => import("containers/Login/Login"));
const NotFound = lazy(() => import("containers/NotFound/NotFound"));

const KRA = lazy(() => import("containers/KRA/KRA"));
const NHIF = lazy(() => import("containers/NHIF/NHIF"));
const NSSF = lazy(() => import("containers/NSSF/NSSF"));
const Companies = lazy(() => import("containers/Companies/Companies"));
const Allowances = lazy(() => import("containers/Allowances/Allowances"));
const MpesaReports = lazy(() => import("containers/MpesaReports/MpesaReports"));

/**
 *
 *  A wrapper for <Route> that redirects to the login
 * screen if you're not yet authenticated.
 *
 */

const Routes = ({ deviceType, toggleTheme, theme }) => {
  return (
    <AuthProvider>
      <Suspense fallback={<InLineLoader />}>
        <Switch>
          <PrivateRoute
            toggleTheme={toggleTheme}
            theme={theme}
            exact={true}
            path={DASHBOARD}
          >
            <Dashboard deviceType={deviceType} />
          </PrivateRoute>

          <PrivateRoute
            toggleTheme={toggleTheme}
            theme={theme}
            path={EMPLOYEES}
          >
            <Employees deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute
            exact={true}
            toggleTheme={toggleTheme}
            theme={theme}
            path={EMPLOYEE}
          >
            <Employee deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute
            toggleTheme={toggleTheme}
            theme={theme}
            path={COMPANIES}
          >
            <Companies deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute
            toggleTheme={toggleTheme}
            theme={theme}
            path={ALLOWANCES}
          >
            <Allowances deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute toggleTheme={toggleTheme} theme={theme} path={kra}>
            <KRA deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute toggleTheme={toggleTheme} theme={theme} path={nhif}>
            <NHIF deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute toggleTheme={toggleTheme} theme={theme} path={nssf}>
            <NSSF deviceType={deviceType} />
          </PrivateRoute>
          <PrivateRoute
            toggleTheme={toggleTheme}
            theme={theme}
            path={MPESA_REPORTS}
          >
            <MpesaReports deviceType={deviceType} />
          </PrivateRoute>
          <Route path={LOGIN}>
            <Login />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </Suspense>
    </AuthProvider>
  );
};

export default Routes;
