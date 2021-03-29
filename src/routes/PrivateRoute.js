import React, { lazy, Suspense, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";

import { InLineLoader } from "components/InlineLoader/InlineLoader";
const AdminLayout = lazy(() => import("layout/Layout"));

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <AdminLayout toggleTheme={rest.toggleTheme} theme={rest.theme}>
            <Suspense fallback={<InLineLoader />}>{children}</Suspense>
          </AdminLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
