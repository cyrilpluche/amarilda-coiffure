/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

/** MATERIAL UI */
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Divider from "@material-ui/core/Divider/Divider";

class Catalogue extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.catalogueMain }>
                <Grid container  style={ style.catalogueRow }>
                    <Typography variant='overline' style={ style.categoryLabel }>
                        Homme
                    </Typography>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Typography variant='overline' style={ style.categoryLabel }>
                        Femme
                    </Typography>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Typography variant='overline' style={ style.categoryLabel }>
                        Enfants
                    </Typography>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Catalogue.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Catalogue));