/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

/** MATERIAL UI */
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";

class Home extends React.Component {

    onNavigateTo (link) {
        _helper.History.push(link)
    }

    render() {
        const { classes } = this.props;

        return (
            <div id={'homeCover'} style={ style.main }>
                <div style={ style.colorOverlay }/>
                <Grid container justify='center' alignItems='center' style={ style.content }>
                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <Typography component="h2" variant="h2" style={ style.mainText }>
                                {'Amarilda Coiffure'.toUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* CATALOGUE BUTTON */}
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={2}>
                            <Button href='#prestationList' variant='outlined' style={ style.mainButton } fullWidth>
                                <Typography variant="overline" style={{ fontSize: '1.1em'}}>
                                    {'Catalogue'.toUpperCase()}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    {/* SCHEDULE BUTTON */}
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={2}>
                            <Button variant='outlined' style={ style.mainButton } fullWidth onClick={() => this.onNavigateTo('schedule')}>
                                <Typography variant="overline" style={{ fontSize: '1.1em'}}>
                                    {'Horaires'.toUpperCase()}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Home));