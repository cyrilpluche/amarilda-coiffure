export const style = {
    homeContainer: {
        height: '100%',
    },
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
        letterSpacing: '10px',
        zIndex: 1,
    },
    secondaryText: {
        color: 'white',
        letterSpacing: '7px',
        zIndex: 1,
    },
    mainButton: {
        marginTop: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        color: '#323232',
        borderRadius: 0,
        zIndex: 1,
        transition: 'transform .2s',
    }
};


