import React from "react";
import Layout from "../../components/Layout";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherContext } from "../../context/weatherContext";
import Forecast from "./components/Forecast";
import HourlyChart from "./components/HourlyChart";

const LandingPage = () => {
    const { currentWeather, forecast } = React.useContext(WeatherContext);

    return (
        <Layout>
            {currentWeather ? (
                <CurrentWeather currentWeather={currentWeather} />
            ) : null}
            {forecast ? (
                <React.Fragment>
                    <HourlyChart hourlyWeather={forecast.hourly} timezone={forecast.timezone} />
                    <Forecast forecast={forecast} />
                </React.Fragment>
            ) : null}
        </Layout>
    );
};

export default LandingPage;
