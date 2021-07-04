import React from "react";
import getTime from "../../../../utils/getTime";
import { Container } from "./styled";
import { Line, defaults } from "react-chartjs-2";

defaults.color = "#FFF"

const HourlyChart = ({ hourlyWeather, timezone }) => {
    const hours = hourlyWeather.map((hour) => getTime(hour.dt, timezone)).slice(0, 24);
    const temps = hourlyWeather.map((hour) => hour.temp).slice(0,24);

    const data = {
        labels: hours,
        datasets: [
            {
				label: "Temp",
                data: temps,
                fill: true,
    			backgroundColor: "rgba(0, 0, 0, .5)",
                borderColor: "rgba(5,51,107,1)",
				height: "300"
            },
        ],
    };

    const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		}
    };

    return (
        <Container >
            <Line data={data} height={300} options={options} />
        </Container>
    );
};

export default HourlyChart;
