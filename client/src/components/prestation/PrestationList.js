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
import Divider from "@material-ui/core/es/Divider/Divider";

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
            <div style={ style.prestationListContainer }>
                <Grid id="prestationList" container justify='center' alignItems='flex-start'>
                    <Grid item xs={12} style={ style.prestationlistHeader }>
                        <Grid container justify='center' >
                            <Typography variant='h2' className={ classes.h2 } style={ style.prestationlistTitle }>
                                CATALOGUE
                            </Typography>
                            <Grid container justify='center'>
                                <Grid item xs={12} md={4} className={ classes.divider1 }>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container justify='center'>
                            <Typography className={ classes.h3 } variant='overline' style={{fontSize: 30}}>
                                FEMME
                            </Typography>
                        </Grid>
                        {this.props.prestations.map((prestation, index)=>
                            prestation.category_name.toLowerCase() === 'femme' ?
                                <Grid item xs={12} key={index} style={style.prestationContainer}>
                                    <PrestationPreview prestation={prestation} />
                                </Grid>
                                : null
                        )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container justify='center'>
                            <Typography className={ classes.h3 } variant='overline' style={{fontSize: 30}}>
                                HOMME
                            </Typography>
                        </Grid>
                        {this.props.prestations.map((prestation, index)=>
                            prestation.category_name.toLowerCase() === 'homme' ?
                                <Grid item xs={12} key={index} style={style.prestationContainer}>
                                <PrestationPreview prestation={prestation} />
                            </Grid>
                                : null
                        )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container justify='center'>
                            <Typography className={ classes.h3 } variant='overline' style={{fontSize: 30}}>
                                MIXTE
                            </Typography>
                        </Grid>
                        {this.props.prestations.map((prestation, index)=>
                            prestation.category_name.toLowerCase() === 'mixte' ?
                                <Grid item xs={12} key={index} style={style.prestationContainer}>
                                    <PrestationPreview prestation={prestation} />
                                </Grid>
                                : null
                        )}
                    </Grid>
                </Grid>
            </div>
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