/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  	extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1780px'
      },
  		colors: {
  			primary: '#DB4444',
  			'blue-gray': '#CBE4E8'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			poppins:  '"Poppins" sans-serif',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

