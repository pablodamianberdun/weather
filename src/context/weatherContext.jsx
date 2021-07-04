import React from 'react'
import getWeather from '../api/getWeather'

export const WeatherContext = React.createContext()

const WeatherProvider = (props) => {
	const [city, setCity] = React.useState("")
	const [weather, setWeather] = React.useState({})

	React.useEffect( () => {
		if (city === "") return
		getWeather(city)
			.then(resp => setWeather(resp))
	}, [city])

	return (
		<WeatherContext.Provider
			value={{
				setCity,
				weather
			}}
		>
			{props.children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider