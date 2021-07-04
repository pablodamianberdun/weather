const getIcon = (icon) => {
	const path = require(`../assets/icons/${icon}.svg`);
	return path.default
}

export default getIcon