/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

/** MATERIAL UI */
import Navbar from "../navbar/Navbar";
import Cover from "../cover/Cover";
import Catalogue from "../catalogue/Catalogue"
import Contact from "../contact/Contact"

class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.mainHome }>
                <Navbar/>
                <Cover/>
                <Catalogue/>
                <Contact/>
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