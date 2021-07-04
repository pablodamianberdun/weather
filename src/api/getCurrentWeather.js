import { apiInstance } from "../utils/axios";

const getCurrentWeather = async (city) => {
	try {
		let resp = await apiInstance.get(`/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
		return resp.data
	} catch (error) {
		console.error(error)
	}
}

export default getCurrentWeather