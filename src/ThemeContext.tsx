import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./theme";

const ThemeToggleContext: any = React.createContext("");

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }: { children: any }) => {
  const [themeState, setThemeState] = React.useState({
    mode: localStorage.getItem("theme") || "light"
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;
  const toggle = () => {
    const mode = themeState.mode === "light" ? "dark" : "light";
    setThemeState({ mode });
    localStorage.setItem("theme", mode);
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
