import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./theme/globalStyles";
import LandingPage from "./pages/LandingPage";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <LandingPage />
    </React.StrictMode>,
    document.getElementById("root")
);
