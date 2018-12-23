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
import Navbar from "../navbar/Navbar";

class Home extends React.Component {

    onNavigateTo (link) {
        _helper.History.push(link)
    }

    smoothScroll (element) {
        document.querySelector(element.toString()).scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
    }

    /* onClick={() => this.onNavigateTo('schedule')} */

    //href='#prestationList'
    render() {
        const { classes } = this.props;

        return (
            <div id={'homeCover'} style={ style.main }>
                <div style={ style.colorOverlay }/>
                <Navbar/>
                <Grid container justify='center' alignItems='center' style={ style.content }>
                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <Typography component="h2" variant="h2" style={ style.mainText }>
                                {'Amarilda Coiffure'.toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid container justify='center' alignItems='center'>
                            <Typography  variant="overline" style={ style.secondaryText }>
                                {'Coiffure à domicile sur Montélimar et ses alentours'.toUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* CATALOGUE BUTTON */}
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={2}>
                            <Button
                                onClick={() => this.smoothScroll('#prestationList')}
                                variant='outlined'
                                style={ style.mainButton }
                                fullWidth
                                className={ classes.hoverZoom }
                            >
                                <Typography variant="overline" style={{ fontSize: '1.1em'}}>
                                    {'Catalogue'.toUpperCase()}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    {/* CONTACT BUTTON */}
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={2}>
                            <Button
                                onClick={() => this.smoothScroll('#contact')}
                                variant='outlined'
                                style={ style.mainButton }
                                fullWidth
                                className={ classes.hoverZoom }
                            >
                                <Typography variant="overline" style={{ fontSize: '1.1em'}}>
                                    {'Contact'.toUpperCase()}
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