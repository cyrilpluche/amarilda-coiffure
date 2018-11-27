/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

/** MATERIAL UI */
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";

class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.main }>
                <div style={ style.colorOverlay }/>
                <Grid container justify='center' alignItems='center' style={ style.content }>
                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <Typography component="h2" variant="h2" style={ style.mainText }>
                                {'Amarilda Coiffure'.toUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button variant='outlined' style={ style.mainButton }>
                        <Typography variant="overline" style={{ fontSize: '1.1em'}}>
                            {'Catalogue'.toUpperCase()}
                        </Typography>
                    </Button>
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