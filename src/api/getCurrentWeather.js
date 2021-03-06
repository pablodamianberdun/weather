import { apiInstance } from "../utils/axios";

const getCurrentWeather = async (city) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
        let resp = await apiInstance.get(
            `/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

export default getCurrentWeather;
