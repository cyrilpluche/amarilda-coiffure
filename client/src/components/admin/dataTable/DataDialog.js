import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SettingsIcon from '@material-ui/icons/Settings';
import AddBoxIcon from '@material-ui/icons/AddBox'
import { style } from '../Style'

export default class DataDialog extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            open: false,
            element: this.props.element
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = () => {
        this.props.submit(this.props.table, this.state.element, this.props.index)
        this.setState({ open: false });
    };

    handleChange = name => event => {
        let updatedElement = Object.assign({}, this.state.element)
        updatedElement[name] = event.target.value
        this.setState({
            element: updatedElement,
        });
    };

    render() {
        return (
            <div>
                {this.props.icon === 'create' ? (
                    <Button variant="contained" color='primary'  style={ style.button } onClick={this.handleClickOpen}>
                        Create <AddBoxIcon style={ style.rightIcon }/>
                    </Button>
                ) : (
                    <Button onClick={this.handleClickOpen}>
                        <SettingsIcon/>
                    </Button>

                )}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        {Object.values(this.state.element).map((value, index) =>
                            Object.keys(this.state.element)[index] !== '_id' && Object.keys(this.state.element)[index] !== '__v' ? (
                                <TextField
                                    key={index}
                                    autoFocus
                                    margin="dense"
                                    id={Object.keys(this.state.element)[index]}
                                    label={Object.keys(this.state.element)[index]}
                                    type="text"
                                    value={value}
                                    onChange={this.handleChange(Object.keys(this.state.element)[index])}
                                    fullWidth
                                />
                            ) : (
                                null
                            )
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}