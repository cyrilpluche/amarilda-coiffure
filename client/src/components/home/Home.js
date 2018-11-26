/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
//import { style } from './Style'
import { globalStyle } from '../../style'

class Home extends React.Component {

    render() {
        //const { classes } = this.props;

        return (
            <div>
                Ok ok ok
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