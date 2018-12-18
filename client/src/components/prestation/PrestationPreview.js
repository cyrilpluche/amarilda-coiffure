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

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import ClearLogo from "@material-ui/icons/Clear"
import DoneLogo from "@material-ui/icons/Done"
import _action from "../../actions";
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";

class PrestationList extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        const { classes, prestation } = this.props;

        return (
            <Card style={ style.prestationPreview }>
                <CardActionArea>
                    <CardMedia
                        style={ style.media }
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="overline" component="h2" style={ style.prestationPreviewText }>
                            {prestation.prestation_title}
                        </Typography>
                        <Typography component="h2" style={ style.prestationPreviewText }>
                            {prestation.prestation_description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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