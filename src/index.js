import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./theme/globalStyles";
import LandingPage from "./pages/LandingPage";
import WeatherProvider from "./context/weatherContext"

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
		<WeatherProvider>
        	<LandingPage />
		</WeatherProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
