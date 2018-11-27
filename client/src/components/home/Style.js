import bg from '../../public/images/home_bg.jpg'

export const style = {
    main: {
        height: '100%',
        width: '100%',
        backgroundImage: `url(${bg})`,
        backgroundSize: '100%',
    },
    colorOverlay: {
        height: '100%',
        width: '100%',
        zIndex: 0,
        position: 'absolute',
        background: '#66425b',
        opacity: '.7',
    },
    content: {
        paddingTop: '20%',
        //width: '100%',
        zIndex: 1,
    },
    mainText: {
        color: 'white',
        zIndex: 1,
    },
    mainButton: {
        marginTop: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        color: '#323232',
        borderRadius: 0,
        zIndex: 1,
    },
};


