/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0a0a0a', // Deep Black
                secondary: '#e8e8e8', // Soft Silver
                accent: '#c0c0c0', // Metallic Silver
                'silver-dark': '#a0a0a0',
                'silver-light': '#f5f5f5',
            },
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'metallic-gradient': 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #a0a0a0 100%)',
                'dark-gradient': 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
            },
        },
    },
    plugins: [],
}
