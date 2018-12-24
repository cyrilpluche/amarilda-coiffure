import { createMuiTheme } from "@material-ui/core"

const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme

export const globalStyle = theme => ({
    main: {
        backgroundColor: 'red'
    },
    divider1: {
        backgroundColor: '#cecece',
        height: '1px',
        width: '100%',
    },
    hoverZoom: {
        zIndex: 1,
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    navMarginTop: {
        paddingTop: '64px',
    },
    h2: {
        [breakpoints.down("sm")]: {
            fontSize: "30px !important"
        }
    },
    h3: {
        [breakpoints.down("sm")]: {
            fontSize: "20px !important"
        }
    },
    navbarIconHover: {
        '&:hover': {
            opacity: '1 !important'
        }
    }
})

export const globalColors = {
    primary: 'blue',
    secondary: 'yellow',
    third: '#ee90e4',
    palette1: '#6d1b7b',
    palette2: '#9c27b0',
    palette3: '#af52bf',

    bgColor: '#f8f8f8',

}


