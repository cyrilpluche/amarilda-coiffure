import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        [this.props.title]: this.props.tableSelected,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event.target.value)
    };

    render() {
        const { classes, tables } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor={this.props.title}>{this.props.title}</InputLabel>
                    <Select
                        value={this.state[this.props.title]}
                        onChange={this.handleChange}
                        inputProps={{
                            name: this.props.title,
                            id: this.props.title,
                        }}
                    >
                        {tables.map((table, index) =>
                            <MenuItem key={index} value={table}>{table}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);