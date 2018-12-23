/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

/** MATERIAL UI */

class Contact extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.catalogueMain }>
                ui
            </div>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Contact));