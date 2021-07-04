import React, {createContext} from 'react'
import getWeather from '../api/getWeather'

export const WeatherContext = createContext()

const WeatherProvider = (props) => {
	const [city, setCity] = React.useState("")

	React.useEffect( () => {
		if (city === "") return
		getWeather(city)
			.then(resp => console.log(resp))
	}, [city])

	return (
		<WeatherContext.Provider
			value={{
				setCity
			}}
		>
			{props.children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider