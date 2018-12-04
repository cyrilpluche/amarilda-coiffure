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
import Calendar from '../ui/react-calendar-material';

/** MATERIAL UI */
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import ClearLogo from "@material-ui/icons/Clear"
import DoneLogo from "@material-ui/icons/Done"

class Schedule extends React.Component {

    schedules = {
        morning: [
            {label: '09h - 10h', isFree: false},
            {label: '10h - 11h', isFree: false},
            {label: '11h - 12h', isFree: true},
        ],
        afternoon: [
            {label: '14h - 15h', isFree: false},
            {label: '15h - 16h', isFree: true},
            {label: '16h - 17h', isFree: false},
        ],
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.calendarScheduleContainer }>
                <div style={ style.calendarContainer }>
                    <Calendar
                        accentColor={globalColors.third}
                        orientation={'flex-col'}
                        showHeader={true}
                        onDatePicked={(d) => {
                            console.log('onDatePicked', d);
                        }}
                    />
                </div>

                <Grid container justify="space-around" style={ style.scheduleContainer }>
                    <Grid item xs={3}>
                        <Grid container justify='center'>
                            <Typography variant='overline' style={ style.scheduleTitle }>
                                {'matin'.toUpperCase()}
                            </Typography>
                        </Grid>
                        { this.schedules.morning.map((s, index) =>
                            <Grid
                                container
                                justify='space-between'
                                style={ style.scheduleContent }
                                key={s.label + index}
                            >
                                {s.label}
                                {s.isFree ? (
                                    <DoneLogo style={{ color: '#4caf50' }}/>
                                ) : (
                                    <ClearLogo style={{ color: '#e91e63' }}/>
                                )}
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container justify='center'>
                            <Typography variant='overline' style={ style.scheduleTitle }>
                                {'après-midi'.toUpperCase()}
                            </Typography>
                        </Grid>
                        { this.schedules.afternoon.map((s, index) =>
                            <Grid container justify='space-between' style={ style.scheduleContent } key={s.label + index}>
                                {s.label}
                                {s.isFree ? (
                                    <DoneLogo style={{ color: '#4caf50' }}/>
                                ) : (
                                    <ClearLogo style={{ color: '#e91e63' }}/>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(Schedule));