module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4E60FF",
                primaryHover: "#697BFF",
                primaryLight: "#F3F4FF",
                primaryLightest: "#F8F9FF",
                neutralBlack: "#2B2B43",
                neutralGray: "#83859C",
                neutralGrayLight: "#C7C8D2",
                neutralGrayLightest: "#EDEEF2",
                neutralGrayDark: "#545563",
                secondary: "#FD6D22",
                secondaryLight: "#FFF3ED"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ]
}
