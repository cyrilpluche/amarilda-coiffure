/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
import { style } from './Style'
import { globalStyle, globalColors } from '../../../style'

/** COMPONENTS */

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Divider from "@material-ui/core/es/Divider/Divider";
import TextField from "@material-ui/core/TextField/TextField";
import _action from "../../../actions";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button/Button";

class ContactTable extends React.Component {

    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { element: this.props.contact }
    }

    handleChange = name => event => {
        let updatedElement = Object.assign({}, this.state.element)
        updatedElement[name] = event.target.value
        this.setState({
            element: updatedElement,
        });
    };

    handleSubmit = () => {
        const { onCreateContact, onUpdateContact, is_contact_init } = this.props
        if (is_contact_init) {
            onUpdateContact(this.state.element)
        } else {
            onCreateContact(this.state.element)
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.navMarginTop }>
                <Grid container justify='space-between'>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_home_name'}
                            label={'Nom de Société'}
                            type="text"
                            value={this.state.element.contact_home_name ? this.state.element.contact_home_name : ""}
                            onChange={this.handleChange('contact_home_name')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_home_description'}
                            label={'Description Rapide'}
                            type="text"
                            value={this.state.element.contact_home_description ? this.state.element.contact_home_description : ""}
                            onChange={this.handleChange('contact_home_description')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_description'}
                            label={'Description contact'}
                            type="text"
                            value={this.state.element.contact_description ? this.state.element.contact_description : ""}
                            onChange={this.handleChange('contact_description')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_siret'}
                            label={'N° Siret'}
                            type="text"
                            value={this.state.element.contact_siret ? this.state.element.contact_siret : ""}
                            onChange={this.handleChange('contact_siret')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_phone'}
                            label={'Téléphone'}
                            type="number"
                            value={this.state.element.contact_phone ? this.state.element.contact_phone : ""}
                            onChange={this.handleChange('contact_phone')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_email'}
                            label={'Email'}
                            type="email"
                            value={this.state.element.contact_email ? this.state.element.contact_email : ""}
                            onChange={this.handleChange('contact_email')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'contact_schedule'}
                            label={'Horaires'}
                            type="text"
                            value={this.state.element.contact_schedule ? this.state.element.contact_schedule : ""}
                            onChange={this.handleChange('contact_schedule')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={{ marginTop: 20 }}>
                        <Button fullWidth variant="outlined" color='primary'  style={ style.button } onClick={this.handleSubmit}>
                            Sauvegarder <SaveIcon style={ style.rightIcon }/>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

ContactTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    isLoading: state.Admin.isLoading,
    is_contact_init: state.Admin.is_contact_init
})

const mapDispatchToProps = {
    onCreateContact: _action.adminAction.createContact,
    onUpdateContact: _action.adminAction.updateContact,
    onDeleteContact: _action.adminAction.deleteContact,
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(ContactTable));