import React from 'react'
import getCurrentWeather from '../api/getCurrentWeather'

export const WeatherContext = React.createContext()

const WeatherProvider = (props) => {
	const [city, setCity] = React.useState("")
	const [currentWeather, setCurrentWeather] = React.useState(null)

	React.useEffect( () => {
		if (city === "") return
		getCurrentWeather(city)
			.then(resp => setCurrentWeather(resp))
	}, [city])

	return (
		<WeatherContext.Provider
			value={{
				setCity,
				currentWeather
			}}
		>
			{props.children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider