const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: "#222831",
                second: "#393E46",
                main: "#4ECCA3",
                last: "#EEEEEE",
            },
            screens: {
                sml: "420px",
                msm: { max: "640px" },
            },
        },
    },
    plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
