import React from "react";
import { Container } from "./styled";
import ForecastCard from "../ForecastCard";

const ForecastList = ({ forecast }) => {
    return (
        <Container>
            {forecast.daily.map((day, index) => (
                <ForecastCard
                    key={index}
                    timezone={forecast.timezone}
                    weatherDay={day}
                />
            ))}
        </Container>
    );
};

export default ForecastList;
