module.exports = {
    purge: ['layouts/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'tc-orange': '#FF8C21',
                'tc-blue': '#36C9C6',
                'tc-yellow': '#F4F1BB',
                'tc-grey': '#E6EBE0',
                'tc-green': '#AEDAD9',
                'tc-dark-green': '#9BC1BC',
                'tc-dark-grey': '#6C6C6C',
                'tc-light-black': '#3A3A3A',
            },
            height: {
                '20px': '20px',
                '26px': '26px',
                '60px': '60px',
            },
            width: {
                '32px': '32px',
                '60px': '60px',
            },
            padding: {
                '20px': '20px',
                '25px': '25px',
                '36px': '36px',
                '48px': '48px',
                '58px': '58px',
                '60px': '60px',
                '70px': '70px',
                '75px': '75px',
                '90px': '90px',
                '310px': '310px',
            },
            margin: {
                '25px': '25px',
                '28px': '28px',
                '30px': '30px',
                '60px': '60px',
                '70px': '70px',
                '75px': '75px',
                '115px': '115px',
            },
            fontSize: {
                '11px': '11px',
                '18px': '18px',
            },
            gap: {
                '18px': '18px',
                '20px': '20px',
                '21px': '21px',
                '25px': '25px',
                '75px': '75px',
                '85px': '85px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
