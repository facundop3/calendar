import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { MyThemeProvider } from "../ThemeContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MyThemeProvider>
      <App />
    </MyThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
