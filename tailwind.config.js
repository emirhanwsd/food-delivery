module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4E60FF",
                primaryHover: "#697BFF",
                neutralBlack: "#2B2B43",
                neutralGray: "#83859C",
                neutralGrayLight: "#C7C8D2",
                neutralGrayDark: "#545563"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
