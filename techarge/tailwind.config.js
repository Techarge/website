module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  colors: {
		  'tc-orange': '#FF8C21',
		  'tc-blue': '#36C9C6',
		  'tc-yellow': '#F4F1BB',
		  'tc-grey': '#E6EBE0',
	  },
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
