import React from "react";
import Layout from "../../components/Layout";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherContext } from "../../context/weatherContext";
import Forecast from "./components/Forecast";

const LandingPage = () => {
    const { currentWeather, forecast } = React.useContext(WeatherContext);

    return (
        <Layout>
            {currentWeather ? (
                <CurrentWeather currentWeather={currentWeather} />
            ) : null}
            {forecast ? <Forecast forecast={forecast} /> : null}
        </Layout>
    );
};

export default LandingPage;
