import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	* {
		padding: 0;
		margin: 0;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		background: rgb(5,51,107);
		background: linear-gradient(180deg, rgba(5,51,107,1) 0%, rgba(12,88,182,1) 100%);
		background-repeat: no-repeat;
		height: 100vh;
	}
`;

export default globalStyle;
