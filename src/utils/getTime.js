import moment from "moment-timezone"

const getTime = (dt, timezone) => moment.tz(dt * 1000, timezone).format("HH:mm");

export default getTime