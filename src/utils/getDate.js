import moment from "moment-timezone";

const getDate = (dt, zone) => moment.tz(dt * 1000, zone).format("ddd. D");

export default getDate;
