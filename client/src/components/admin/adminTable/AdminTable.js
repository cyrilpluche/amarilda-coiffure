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

class AdminTable extends React.Component {

    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            member_email: this.props.login_member_email,
            member_old_password: '',
            member_password: '',
            member_password_confirmation: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        const { onUpdateAdmin } = this.props
        onUpdateAdmin (this.state)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.navMarginTop }>
                <Grid container justify='space-between'>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            disabled
                            margin="dense"
                            id={'member_email'}
                            label={'Email Admin'}
                            type="text"
                            value={this.state.member_email}
                            onChange={this.handleChange('member_email')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'member_old_password'}
                            label={'Ancien mot de passe'}
                            type="password"
                            value={this.state.member_old_password}
                            onChange={this.handleChange('member_old_password')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'member_password_confirmation'}
                            label={'Nouveau mot de passe'}
                            type="password"
                            value={this.state.member_password_confirmation}
                            onChange={this.handleChange('member_password_confirmation')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={ style.textfield }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={'member_password'}
                            label={'Confirmer nouveau mot de passe'}
                            type="password"
                            value={this.state.member_password}
                            onChange={this.handleChange('member_password')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={{ marginTop: 20, marginBottom: '40px' }}>
                        <Button fullWidth variant="outlined" color='primary'  style={ style.button } onClick={this.handleSubmit}>
                            Sauvegarder <SaveIcon style={ style.rightIcon }/>
                        </Button>
                    </Grid>
                    {this.props.error_msg ? (
                        <Grid container justify='flex-start'>
                            <Grid item xs={12}>
                                <Divider/>
                                <Typography style={ style.loginError } variant='overline'>
                                    {this.props.error_msg}
                                </Typography>
                            </Grid>
                        </Grid>
                    ) : null}
                </Grid>
            </div>
        )
    }
}

AdminTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    isLoading: state.Admin.isLoading,
    login_member_email: state.Admin.login_member_email,
    error_msg: state.Admin.error_msg
})

const mapDispatchToProps = {
    onUpdateAdmin: _action.adminAction.updateAdmin,
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminTable));