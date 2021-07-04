import React from "react";
import Layout from "../../components/Layout";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherContext } from "../../context/weatherContext";

const LandingPage = () => {
	const {currentWeather} = React.useContext(WeatherContext)

    return (
        <Layout>
			{currentWeather ? <CurrentWeather /> : null}
            
        </Layout>
    );
};

export default LandingPage;
