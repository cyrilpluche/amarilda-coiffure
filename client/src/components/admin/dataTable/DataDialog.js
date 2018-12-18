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
        this.setState({
            open: true,
            element: this.props.element
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
            element: this.props.element
        });
    };

    handleSubmit = () => {
        this.props.submit(this.props.table, this.state.element, this.props.index)
        this.setState({
            open: false,
            element: this.props.element
        });
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
                    <Button variant="outlined" color='primary'  style={ style.button } onClick={this.handleClickOpen}>
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
                        {Object.values(this.props.elementRules).map((value, index) =>
                                <TextField
                                    key={index + 1}
                                    autoFocus
                                    margin="dense"
                                    id={value.label}
                                    label={value.label}
                                    type="text"
                                    value={this.state.element[value.label] ? this.state.element[value.label] : ""}
                                    onChange={this.handleChange(value.label)}
                                    fullWidth
                                />
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