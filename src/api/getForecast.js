import { apiInstance } from "../utils/axios";

const getForecast = async (lon, lat) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
        let resp = await apiInstance.get(
            `/onecall?lon=${lon}&lat=${lat}&lang=sp&exclude=minutely&appid=${apiKey}&units=metric`
        );
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

export default getForecast;
