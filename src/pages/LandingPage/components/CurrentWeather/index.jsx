import React from "react";
import {
    Container,
    City,
    Temp,
    Icon,
    HighLowTemp,
    Description,
    Flex,
} from "./styled";
import { WeatherContext } from "../../../../context/weatherContext";
import getIcon from "../../../../utils/getIcon";

const CurrentWeather = () => {
    const { currentWeather } = React.useContext(WeatherContext);
    const { main, name, weather, sys } = currentWeather;

    return (
        <Container>
            <City>
                {name}, <span>{sys.country}</span>
            </City>
            <Flex>
                <Temp>{Math.round(main.temp)}º</Temp>
                <Icon src={getIcon(weather[0].icon)} />
            </Flex>
            <Flex>
                <HighLowTemp>
                    Min: {Math.round(main.temp_min)}º / Max:{" "}
                    {Math.round(main.temp_max)}º
                </HighLowTemp>
                <Description>{weather[0].main}</Description>
            </Flex>
        </Container>
    );
};

export default CurrentWeather;
