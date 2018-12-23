/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
import { style } from './Style'
import { globalStyle, globalColors } from '../../style'

/** COMPONENTS */
import Calendar from '../ui/react-calendar-material';
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Divider from "@material-ui/core/es/Divider/Divider";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab';

class Navbar extends React.Component {

    smoothScroll (element) {
        document.querySelector(element.toString()).scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
        console.log('HEY')
    }

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="absolute" style={ style.navbarContainer }>
                <Grid container justify='flex-end'>
                    <Fab aria-label="Add" style={ style.navbarIcon } onClick={() => this.smoothScroll('#homeCover')}>
                        <ArrowUpIcon/>
                    </Fab>
                </Grid>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Navbar));