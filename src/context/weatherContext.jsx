import React from 'react'
import getCurrentWeather from '../api/getCurrentWeather'
import getForecast from "../api/getForecast"

export const WeatherContext = React.createContext()

const WeatherProvider = (props) => {
	const [city, setCity] = React.useState("")
	const [currentWeather, setCurrentWeather] = React.useState(null)
	const [forecast, setForecast] = React.useState(null)

	React.useEffect( () => {
		if (!city) return
		getCurrentWeather(city)
			.then(resp => setCurrentWeather(resp))
	}, [city])

	React.useEffect( () => {
		if (!currentWeather) return
		const {lon, lat} = currentWeather.coord
		getForecast(lon, lat)
			.then( resp => setForecast(resp))
	}, [currentWeather])

	return (
		<WeatherContext.Provider
			value={{
				setCity,
				currentWeather,
				forecast
			}}
		>
			{props.children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider