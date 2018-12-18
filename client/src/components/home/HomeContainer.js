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
import Home from './Home'
import PrestationList from '../prestation/PrestationList'

/** MATERIAL UI */
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";

class HomeContainer extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.homeContainer } id={'homeContainer'}>
                <Home/>
                <PrestationList/>
            </div>
        )
    }
}

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(HomeContainer));