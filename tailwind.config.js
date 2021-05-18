const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
			},
		},
		extend: {
			maxWidth: {
				64: "16rem",
				80: "20rem",
				"4/5": "80%",
			},
			width: {
				110: "110%",
				120: "120%",
				130: "130%",
				140: "140%",
				150: "150%",
			},
			height: {
				110: "110%",
				120: "120%",
				130: "130%",
				140: "140%",
				150: "150%",
			},
			minHeight: {
				256: "256px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
			},
			spacing: {
				128: "32rem",
				256: "256px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				md: "768px",
			},
			fontFamily: {
				sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		// Add variants as needed
		spacing: ["responsive"],
	},
	plugins: [],
};
