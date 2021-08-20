module.exports = {
    purge: ['layouts/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '40px',
        },
        screens: {
            'xs': '400px',
            'sm': {'min': '640px'},
            'md': {'min': '768px'},
            'lg': {'min': '1024px'},
            'xl': {'min': '1280px'},
            '2xl': {'min': '1536px'},
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
                'tc-icons': '#7A7A7A',
            },
            height: {
                '20px': '20px',
                '26px': '26px',
                '52px': '52px',
                '60px': '60px',
                '72px': '72px',
                '82px': '82px',
                '94px': '94px',
                '110px': '110px',
                '115px': '115px',
                '120px': '120px',
                '130px': '130px',
                '150px': '150px',
                '158px': '158px',
                '165px': '165px',
                '166px': '166px',
                '173px': '173px',
                '182px': '182px',
                '194px': '194px',
                '200px': '200px',
                '239px': '239px',
                '238px': '238px',
                '289px': '289px',
                '335px': '335px',
                '345px': '345px',
                '355px': '355px',
                '481px': '481px',
                '496px': '496px',
                'fit-c': 'fit-content'
            },
            width: {
                '32px': '32px',
                '52px': '52px',
                '60px': '60px',
                '72px': '72px',
                '82px': '82px',
                '85px': '85px',
                '94px': '94px',
                '98px': '98px',
                '116px': '116px',
                '115px': '115px',
                '130px': '130px',
                '148px': '148px',
                '146px': '146px',
                '150px': '150px',
                '152px': '152px',
                '158px': '158px',
                '165px': '165px',
                '180px': '180px',
                '182px': '182px',
                '194px': '194px',
                '200px': '200px',
                '210px': '210px',
                '229px': '229px',
                '238px': '238px',
                '255px': '255px',
                '329px': '329px',
                '398px': '398px',
                '415px': '415px',
                '424px': '424px',
                '437px': '437px',
                '640px': '640px',
                '662px': '662px',
                '683px': '683px',
                'fit-c': 'fit-content'
            },
            padding: {
                '10px': '10px',
                '15px': '15px',
                '20px': '20px',
                '25px': '25px',
                '31px': '31px',
                '32px': '32px',
                '36px': '36px',
                '35px': '35px',
                '37px': '37px',
                '40px': '40px',
                '44px': '44px',
                '45px': '45px',
                '48px': '48px',
                '50px': '50px',
                '52px': '52px',
                '56px': '56px',
                '58px': '58px',
                '60px': '60px',
                '65px': '65px',
                '70px': '70px',
                '75px': '75px',
                '80px': '80px',
                '85px': '85px',
                '90px': '90px',
                '95px': '95px',
                '100px': '100px',
                '105px': '105px',
                '110px': '110px',
                '120px': '120px',
                '125px': '125px',
                '135px': '135px',
                '150px': '150px',
                '155px': '155px',
                '185px': '185px',
                '230px': '230px',
                '270px': '270px',
                '310px': '310px',
                '440px': '440px',
            },
            margin: {
                 '90%': '90%',
                 '12vw': '12vw',
                '-120': '-40rem',
                '-360': '-90rem',
                '88': '22rem',
                '100': '25rem',
                '120': '30rem',
                '-40px': '-40px',
                '-20px': '-20px',
                '-5px': '-5px',
                '10px': '10px',
                '15px': '15px',
                '13px': '13px',
                '20px': '20px',
                '25px': '25px',
                '27px': '27px',
                '28px': '28px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
                '65px': '65px',
                '70px': '70px',
                '75px': '75px',
                '80px': '80px',
                '90px': '90px',
                '95px': '95px',
                '100px': '100px',
                '110px': '110px',
                '115px': '115px',
                '128px': '128px',
                '130px': '130px',
                '160px': '160px',
                '200px': '200px',

            },
            inset: {
                '-230px': '-230px',
                '-200px': '-200px',
                '-180px': '-180px',
                '-100px': '-100px',
                '-50px': '-50px',
                '-20px': '-20px',
                '-10px': '-10px',
                '10px': '10px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '60px': '60px',
                '75px': '75px',
                '110px': '110px',
                '120px': '120px',
                '150px': '150px',
                '200px': '200px',
                '214px': '214px',
                '362px': '362px',
                '465px': '465px',
                '550px': '550px',
                '580px': '580px',
                '2650px': '2650px',
                '3000px': '3000px',
                '4390px': '4390px',
                '5965px' : '5965px',
                '4525px': '4525px',
                '6750px': '6750px',
                '10%': '10%',
                '25%': '25%',
                '28': '7rem',
                '32': '8rem',
                '112': '28rem',
                '65vh': '65vh',
            },
            fontSize: {
                '11px': '11px',
                '18px': '18px',
                '22px': '22px',
            },
            gap: {
                '10px': '10px',
                '18px': '18px',
                '20px': '20px',
                '21px': '21px',
                '25px': '25px',
                '26px': '26px',
                '33px': '33px',
                '41px': '41px',
                '46px': '46px',
                '75px': '75px',
                '85px': '85px',
                '97px': '97px',
            },
            borderRadius: {
                '7px': '7px',
                '20px': '20px',
                '50px': '50px',
                '80px': '80px',
                '100px': '100px',
                '130px': '130px',
                '200px': '200px',
                '40%': '40%',
                '50%': '50%',
                '60%': '60%',

            },
            animation: {
                'slideInFromLeft': 'slideInFromLeft 2s ease-in-out 0s 1',
                'slideInFromRight': 'slideInFromRight 2s ease-in-out 0s 1',
                'fadeInFromBottom': 'fadeInFromBottom 2s ease-in 0s 1',
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': {transform: 'translateX(-1000px);', opacity: '0.25;'},
                    '50%': {opacity: '0.75;'},
                    '100%': {transform: 'translateX(0px);',  opacity: '1;'},
                },
                slideInFromRight: {
                    '0%': {transform: 'translateX(1000px);', opacity: '0.25;'},
                    '50%': {opacity: '0.75;'},
                    '100%': {transform: 'translateX(0);', opacity: '1;'},
                },
                fadeInFromBottom: {
                    '0%': {transform: 'translateY(80px);', opacity: '0;'},
                    '50%': {opacity: '0.75;'},
                    '100%': {transform: 'translateY(0);', opacity: '1;'},
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
