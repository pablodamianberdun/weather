import React from "react";
import ForecastList from "./ForecastList";

const Forecast = ({ forecast }) => {
    return <ForecastList forecast={forecast} />;
};

export default Forecast;
