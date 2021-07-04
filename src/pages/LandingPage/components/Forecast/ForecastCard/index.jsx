import React from "react";
import getDate from "../../../../../utils/getDate";
import getIcon from "../../../../../utils/getIcon";
import { Card, Text, Icon, Div } from "./styled";
import roundNumber from "../../../../../utils/roundNumber";

const ForecastCard = ({ weatherDay, timezone }) => {
    const { weather } = weatherDay;

    return (
        <Card>
            <Text>{getDate(weatherDay.dt, timezone)}</Text>
            <Icon src={getIcon(weather[0].icon)} />
            <Div>
                <Text>{roundNumber(weatherDay.temp.min)}º</Text>
                <Text>{roundNumber(weatherDay.temp.max)}º</Text>
            </Div>
        </Card>
    );
};

export default ForecastCard;
