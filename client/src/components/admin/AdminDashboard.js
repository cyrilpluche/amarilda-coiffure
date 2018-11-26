/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import _action from '../../actions'
//import _business from './Business'
import DataBase from './dataTable/DataTable'
import DataDialog from './dataTable/DataDialog'

/** STYLES */
//import { style } from './Style'
import { globalStyle } from '../../style'

class AdminDashboard extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
        const { onLoadData, table } = this.props
        onLoadData(table)
    }

    render() {
        return (
            <div>
                <DataDialog
                    title={'Create ' + this.props.table}
                    element={this.props.element}
                    index={-1}
                    submit={this.props.onCreateElement}
                    table={this.props.table}
                    icon='create'
                />
                <DataBase
                    labels={this.props.labels}
                    data={this.props.data}
                    isLoading={this.props.isLoading}
                    deleteSelectedData={this.props.onDeleteSelectedData}
                    updateElement={this.props.onUpdateElement}
                    table={this.props.table}
                />
            </div>
        )
    }
}

AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isLoading: state.Admin.isLoading,
    labels: state.Admin.labels,
    data: state.Admin.data,
    element: state.Admin.element,
    table: state.Admin.table
})

const mapDispatchToProps = {
    onLoadData: _action.adminAction.loadData,
    onDeleteSelectedData: _action.adminAction.deleteData,
    onUpdateElement: _action.adminAction.updateElement,
    onCreateElement: _action.adminAction.createElement
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminDashboard));