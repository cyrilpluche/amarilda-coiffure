import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import Calendar from '../../ui/react-calendar-material'

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import {globalColors} from "../../../style";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
});

class DataCalendar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={6}>
                    <Calendar
                        accentColor={'#b1b1b1'}
                        orientation={'flex-col'}
                        showHeader={true}
                        onDatePicked={(d) => {
                            console.log('onDatePicked', d);
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.root}>
                        PROUT
                    </div>
                </Grid>
            </Grid>
        );
    }
}

DataCalendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataCalendar);