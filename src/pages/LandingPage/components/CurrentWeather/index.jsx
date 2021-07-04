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
import getIcon from "../../../../utils/getIcon";
import roundNumber from "../../../../utils/roundNumber";

const CurrentWeather = ({ currentWeather }) => {
    const { main, name, weather, sys } = currentWeather;

    return (
        <Container>
            <City>
                {name}, <span>{sys.country}</span>
            </City>
            <Flex>
                <Temp>{roundNumber(main.temp)}º</Temp>
                <Icon src={getIcon(weather[0].icon)} />
            </Flex>
            <Flex>
                <HighLowTemp>
                    Min: {roundNumber(main.temp_min)}º / Max:{" "}
                    {roundNumber(main.temp_max)}º
                </HighLowTemp>
                <Description>{weather[0].main}</Description>
            </Flex>
        </Container>
    );
};

export default CurrentWeather;
