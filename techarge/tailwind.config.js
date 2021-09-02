module.exports = {
    purge: ['layouts/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '40px',
        },
        fontFamily: {
            'josefin': ['Josefin Sans', 'sans-serif'],

        },
        screens: {
            'xs': '400px',
            'mi': '500px',
            'sm': {'min': '640px'},
            'md': {'min': '768px'},
            'lg': {'min': '1024px'},
            'xl': {'min': '1280px'},
            '2xl': {'min': '1536px'},
        },
        extend: {
            zIndex: {
                '1': 1,
                '2': 2,
                '3': 3,
            },
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
                '64px': '64px',
                '72px': '72px',
                '82px': '82px',
                '89px': '89px',
                '92px': '92px',
                '94px': '94px',
                '100px': '100px',
                '109px': '109px',
                '110px': '110px',
                '115px': '115px',
                '119px': '119px',
                '120px': '120px',
                '129px': '129px',
                '130px': '130px',
                '135px': '135px',
                '141px': '141px',
                '150px': '150px',
                '156px': '156px',
                '158px': '158px',
                '165px': '165px',
                '166px': '166px',
                '171px': '171px',
                '173px': '173px',
                '182px': '182px',
                '194px': '194px',
                '200px': '200px',
                '203px': '203px',
                '208px': '208px',
                '230px': '230px',
                '239px': '239px',
                '240px': '240px',
                '238px': '238px',
                '250px': '250px',
                '278px': '278px',
                '289px': '289px',
                '300px': '300px',
                '330px': '330px',
                '335px': '335px',
                '343px': '343px',
                '345px': '345px',
                '350px': '350px',
                '355px': '355px',
                '359px': '359px',
                '481px': '481px',
                '493px': '493px',
                '496px': '496px',
                '510px': '510px',
                'fit-c': 'fit-content'
            },
            width: {
                '32px': '32px',
                '52px': '52px',
                '60px': '60px',
                '72px': '72px',
                '80px': '80px',
                '82px': '82px',
                '85px': '85px',
                '94px': '94px',
                '98px': '98px',
                '115px': '115px',
                '116px': '116px',
                '119px': '119px',
                '120px': '120px',
                '126px': '126px',
                '129px': '129px',
                '130px': '130px',
                '138px': '138px',
                '148px': '148px',
                '146px': '146px',
                '150px': '150px',
                '151px': '151px',
                '152px': '152px',
                '158px': '158px',
                '165px': '165px',
                '180px': '180px',
                '182px': '182px',
                '187px': '187px',
                '194px': '194px',
                '200px': '200px',
                '205px': '205px',
                '210px': '210px',
                '215px': '215px',
                '216px': '216px',
                '229px': '229px',
                '235px': '235px',
                '238px': '238px',
                '245px': '245px',
                '255px': '255px',
                '264px': '264px',
                '290px': '280px',
                '290px': '290px',
                '329px': '329px',
                '316px': '316px',
                '383px': '383px',
                '382px': '382px',
                '398px': '398px',
                '412px': '412px',
                '415px': '415px',
                '424px': '424px',
                '454px': '454px',
                '434px': '434px',
                '437px': '437px',
                '450px': '450px',
                '494px': '494px',
                '600px': '600px',
                '640px': '640px',
                '662px': '662px',
                '678px': '678px',
                '683px': '683px',
                 '705px': '705px',
                '7/10': '70%',
                'fit-c': 'fit-content'
            },
            padding: {
                '9px': '9px',
                '10px': '10px',
                '14px': '14px',
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
                '55px': '55px',
                '56px': '56px',
                '58px': '58px',
                '60px': '60px',
                '64px': '64px',
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
                '130px': '130px',
                '135px': '135px',
                '144px': '144px',
                '150px': '150px',
                '155px': '155px',
                '180px': '180px',
                '185px': '185px',
                '200px': '200px',
                '220px': '220px',
                '230px': '230px',
                '270px': '270px',
                '310px': '310px',
                 '320px': '320px',
                '440px': '440px',
            },
            margin: {
                '90%': '90%',
                '12vw': '12vw',
                '30vh': '30vh',
                '-120': '-40rem',
                '-360': '-90rem',
                '68': '17rem',
                '88': '22rem',
                '100': '25rem',
                '120': '30rem',
                '-40px': '-40px',
                '-20px': '-20px',
                '-5px': '-5px',
                '5px': '5px',
                '10px': '10px',
                '15px': '15px',
                '16px': '16px',
                '17px': '17px',
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
                '109px': '109px',
                '110px': '110px',
                '115px': '115px',
                '128px': '128px',
                '130px': '130px',
                '150px': '150px',
                '160px': '160px',
                '168px': '168px',
                '170px': '170px',
                '200px': '200px',
                '250px': '250px',
                '300px': '300px',

            },
            inset: {
                '-230px': '-230px',
                '-200px': '-200px',
                '-180px': '-180px',
                '-140px': '-140px',
                '-100px': '-100px',
                '-80px': '-80px',
                '-70px': '-70px',
                '-60px': '-60px',
                '-50px': '-50px',
                '-40px': '-40px',
                '-20px': '-20px',
                '-10px': '-10px',
                '2px': '2px',
                '5px': '5px',
                '10px': '10px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '60px': '60px',
                '75px': '75px',
                '100px': '100px',
                '110px': '110px',
                '120px': '120px',
                '140px': '140px',
                '150px': '150px',
                '180px': '180px',
                '200px': '200px',
                '214px': '214px',
                '225px': '225px',
                '350px': '350px',
                '362px': '362px',
                '465px': '465px',
                '500px': '500px',
                '550px': '550px',
                '580px': '580px',
                '650px': '650px',
                '680px': '680px',
                '700px': '700px',
                '725px': '725px',
                '750px': '750px',
                '800px': '800px',
                '850px': '850px',
                '1362px': '1362px',
                '1580px': '1580px',
                '2650px': '2650px',
                '3000px': '3000px',
                '4390px': '4390px',
                '5965px': '5965px',
                '4525px': '4525px',
                '6750px': '6750px',
                '10%': '10%',
                '25%': '25%',
                '100%': '100%',
                '28': '7rem',
                '32': '8rem',
                '40': '10rem',
                '112': '28rem',
                '160': '40rem',
                 '180': '45rem',
                '200': '50rem',
                '50vh': '50vh',
                '55vh': '55vh',
                '65vh': '65vh',
            },
            fontSize: {
                '11px': '11px',
                '18px': '18px',
                '22px': '22px',
                '30px': '30px',
                 '45px': '45px',
                '50px': '50px',
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
                '0px': '0px',
                '7px': '7px',
                '20px': '20px',
                '50px': '50px',
                '80px': '80px',
                '100px': '100px',
                '150px': '150px',
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
                'dnaRotate': 'dnaRotate 2s ease-in 0s 1',
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': {transform: 'translateX(-1000px);', opacity: '0.25;'},
                    '50%': {opacity: '0.75;'},
                    '100%': {transform: 'translateX(0px);', opacity: '1;'},
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
                dnaRotate: {
                    '0%': {transform: 'rotateY(0deg);'},
                    '50%': {transform: 'rotateY(1800deg);'},
                    '100%': {transform: 'rotateY(0deg);'},
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
