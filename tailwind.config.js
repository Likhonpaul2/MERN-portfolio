/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example custom color variables
        'primary-text': "#000000",
        'secondary-text': "#555555",
        'tertiary-text': "#888888",
        'border-color': "#e0e0e0",
        'hover-bg': "#f5f5f5",
        'accent-color': "#000000",
        'bg-color': "#ffffff",
      },
    },
  },
  plugins: [],
}