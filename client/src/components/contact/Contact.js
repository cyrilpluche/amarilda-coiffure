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

class Contact extends React.Component {

    render() {
        const { classes } = this.props;

        const informations = [
            {label: 'Tel', logo: (<PhoneIcon style={{ marginRight: '10px' }}/>),  value: this.props.contact.contact_phone},
            {label: 'Email', logo: (<EmailIcon style={{ marginRight: '10px' }}/>),  value: this.props.contact.contact_email},
            {label: 'Horaires', logo: (<ScheduleIcon style={{ marginRight: '10px' }}/>),  value: this.props.contact.contact_schedule}

        ]

        return (
            <div id="contact" style={ style.contactContainer }>
                <Grid container justify='center' style={ style.informationContainer }>
                    <Grid container justify='center'>
                        <Typography variant="overline" style={ style.contactTitle }>
                            CONTACT
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container>
                            <img style={ style.img1 } src={img1} alt='photo de coiffure'/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ paddingRight: '5%', paddingLeft: '5%'  }}>
                        <Grid container alignItems='center' style={{ height: '100%'}}>
                            <Typography variant="overline" component="h2" style={ style.prestationPreviewText }>
                                {this.props.contact.contact_description}
                            </Typography>
                            <Grid item xs={12}>
                                {informations.map((information, index) =>
                                    <Grid container justify='space-between' alignItems='center' key={index}>
                                        <Grid item xs={12} md={6}>
                                            <Grid container alignItems='center'>
                                                { information.logo }
                                                <Typography variant="overline" component="h2" style={ style.prestationPreviewText }>
                                                    { information.label }
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Typography variant="overline" component="h2" style={ style.prestationPreviewText }>
                                            { information.value }
                                        </Typography>
                                        <Grid item xs={12}>
                                            <Divider/>
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    contact: state.Contact.contact
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Contact));