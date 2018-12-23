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
import img1 from '../../public/images/contact-img1.jpg'

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Divider from "@material-ui/core/es/Divider/Divider";

class Footer extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div id="footer" style={ style.footerContainer }>
                <Grid container justify='center'>
                    <Typography variant='overline' style={ style.footerText }>
                        Copyright © 2018 AMARILDA COIFFURE.
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Typography variant='overline' style={ style.footerText }>
                        N° Siret : 829 766 690 00012
                    </Typography>
                </Grid>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Footer));