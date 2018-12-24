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
import Input from "@material-ui/core/Input/Input";
import Select from "@material-ui/core/Select/Select";

class AdminLogin extends React.Component {

    constructor (props) {
        super(props)
        this.state= {
            member_email: this.props.member_email,
            member_password: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit () {
        const { onLogAdmin } = this.props
        onLogAdmin(this.state)
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container alignItems='center' style={{ height: '100%' }}>
                <Grid container>
                    <Grid container justify='center' style={{ marginBottom: '20px' }}>
                        <Grid item xs={11} sm={4}>
                            <Typography style={ style.loginTitle } variant='overline' align='center'>
                                Amarilda Coiffure espace admin
                            </Typography>
                            <Divider/>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' style={{ marginBottom: '20px' }}>
                        <Grid item xs={11} sm={4}>
                            <Input
                                onChange={this.handleChange('member_email')}
                                placeholder="Email"
                                value={this.state.member_email}
                                fullWidth
                                inputProps={{
                                    'aria-label': 'Email',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid justify='center' container style={{ marginBottom: '20px' }}>
                        <Grid item xs={11} sm={4}>
                            <Input
                                fullWidth
                                onChange={this.handleChange('member_password')}
                                value={this.state.member_password}
                                placeholder="Mot de passe"
                                type='password'
                                inputProps={{
                                    'aria-label': 'Password',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid justify='center' container style={{ marginBottom: '20px' }}>
                        <Grid item xs={11} sm={4}>
                            <Button color="primary" fullWidth onClick={ this.handleSubmit.bind(this) }>
                                Se connecter
                            </Button>
                        </Grid>
                    </Grid>
                    {this.props.error_msg ? (
                        <Grid container justify='center'>
                            <Grid item xs={11} sm={4}>
                                <Divider/>
                                <Typography style={ style.loginError } variant='overline' align='center'>
                                    {this.props.error_msg}
                                </Typography>
                            </Grid>
                        </Grid>
                    ) : null}
                </Grid>
            </Grid>
        )
    }
}

AdminLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    error_msg: state.Admin.error_msg,
    member_email: state.Admin.login_member_email
})

const mapDispatchToProps = {
    onLogAdmin: _action.adminAction.logAdmin
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminLogin));