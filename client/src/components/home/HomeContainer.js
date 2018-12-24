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

/** COMPONENTS */
import Navbar from '../navbar/Navbar'
import Home from './Home'
import PrestationList from '../prestation/PrestationList'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

/** MATERIAL UI */
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";
import _action from "../../actions";

class HomeContainer extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
        const { onLoadContact } = this.props
        onLoadContact()
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.homeContainer } id={'homeContainer'}>
                <Home/>
                <PrestationList/>
                <Contact/>
                <Footer/>
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
    onLoadContact: _action.contactAction.loadContact,
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(HomeContainer));