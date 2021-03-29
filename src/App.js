import React from "react";

import BaseRouter from "routes/router";
import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { Provider as AlertProvider } from "react-alert"; //, withAlert } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "components/Alerts/Alerts";

import { useMedia } from "utils/useMedia";
import { useDarkMode } from "utils/useDarkMode";
import { GlobalStyle } from "styles/global.style";
import { lightTheme, darkTheme } from "theme/theme";
import { SidebarProvider } from "context/sidebar/use-sidebar";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-phone-input-2/lib/style.css";
import "rc-drawer/assets/index.css";
import "rc-table/assets/index.css";
import "rc-collapse/assets/index.css";
import "react-multi-carousel/lib/styles.css";
import "@redq/reuse-modal/lib/index.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function App() {
  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 991px)");
  const desktop = useMedia("(min-width: 992px)");

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  const alertOptions = {
    timeout: 5000,
    position: "top right",
    containerStyle: {
      top: "50px",
    },
  };

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <OriginalThemeProvider theme={themeMode}>
        <Alerts />
        <SidebarProvider>
          <BaseRouter
            theme={theme}
            toggleTheme={toggleTheme}
            deviceType={{ mobile, tablet, desktop }}
          />
        </SidebarProvider>

        <GlobalStyle />
      </OriginalThemeProvider>
    </AlertProvider>
  );
}

export default App;
