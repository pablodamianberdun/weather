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
		position: relative;
  		min-height: 100vh;
		padding-bottom: 60px;
		background: rgb(5,51,107);
		background: linear-gradient(180deg, rgba(5,51,107,1) 0%, rgba(12,88,182,1) 100%);
		background-repeat: no-repeat;
		overflow-y: auto;
		background-attachment: fixed;
	}

	/* Scroll Bar Styles */
	/* width */
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

export default globalStyle;
