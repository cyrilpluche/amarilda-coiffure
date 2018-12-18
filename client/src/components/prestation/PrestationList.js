/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import _helper from '../../helpers'
//import _action from '../../actions'

/** STYLES */
import { style } from './Style'
import { globalStyle, globalColors } from '../../style'

/** COMPONENTS */
import PrestationPreview from './PrestationPreview'


/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import ClearLogo from "@material-ui/icons/Clear"
import DoneLogo from "@material-ui/icons/Done"
import _action from "../../actions";

class PrestationList extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            prestations: this.props.prestations
        }
    }

    componentDidMount () {
        const { onLoadPrestations } = this.props
        onLoadPrestations()
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid id="prestationList" container justify='center' style={ style.prestationListContainer }>
                <Grid item xs={12}>
                    <Grid container justify='center' style={ style.prestationlistTitle }>
                        <Typography variant='h2'>
                            PRESTATIONS
                        </Typography>
                    </Grid>
                </Grid>
                {this.props.prestations.map((prestation, index)=>
                    <Grid item xs={2} key={index} style={style.prestationContainer}>
                        <PrestationPreview prestation={prestation} />
                    </Grid>
                )}
            </Grid>
        )
    }
}

PrestationList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    isLoading: state.Prestation.isLoading,
    prestations: state.Prestation.prestations
})

const mapDispatchToProps = {
    onLoadPrestations: _action.prestationAction.loadPrestations,

}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(PrestationList));