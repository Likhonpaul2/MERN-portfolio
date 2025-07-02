/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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

        // dark mood color 
        "dark-primary-text": "#ffffff",
        "dark-secondary-text": "#aaaaaa",
        "dark-tertiary-text": "#777777",
        "dark-border-color": "#333333",
        "dark-hover-bg": "#222222",
        "dark-accent-color": "#ffffff",
        "dark-bg-color": "#121212"
      },
    },
  },
  plugins: [],
}