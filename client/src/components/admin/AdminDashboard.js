/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import _action from '../../actions'
//import _business from './Business'
import DataTable from './dataTable/DataTable'
import DataDialog from './dataTable/DataDialog'
import DataCalendar from './dataCalendar/DataCalendar'
import Select from '../ui/select/Select'

/** STYLES */
//import { style } from './Style'
import { globalStyle } from '../../style'
import Grid from "@material-ui/core/Grid/Grid";

class AdminDashboard extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            tableSelected: 'Member'
        }
    }

    componentDidMount () {
        const { onLoadData, table } = this.props
        onLoadData(table)
    }

    handleChangeSelect (table) {
        const { onLoadData } = this.props
        this.setState({ tableSelected: table})
        onLoadData(table)
    }

    render() {

        const dataTables = [
            'Member',
            'Prestation',
            'Schedule'
        ]

        return (
            <Grid container alignItems='center'>
                <Select
                    title='Table'
                    tables={dataTables}
                    tableSelected={this.state.tableSelected}
                    onChange={this.handleChangeSelect.bind(this)}
                />
                <DataDialog
                    title={'Create ' + this.props.table}
                    element={this.props.element}
                    elementRules={this.props.elementRules}
                    index={-1}
                    submit={this.props.onCreateElement}
                    table={this.props.table}
                    icon='create'
                />
                {this.state.tableSelected !== 'Schedule' ? (
                    <Grid container>
                        <DataTable
                            labels={this.props.labels}
                            data={this.props.data}
                            elementRules={this.props.elementRules}
                            isLoading={this.props.isLoading}
                            deleteSelectedData={this.props.onDeleteSelectedData}
                            updateElement={this.props.onUpdateElement}
                            table={this.props.table}
                        />
                    </Grid>
                ) : (
                    <DataCalendar/>
                )}

            </Grid>
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
    elementRules: state.Admin.elementRules,
    table: state.Admin.table
})

const mapDispatchToProps = {
    onLoadData: _action.adminAction.loadData,
    onDeleteSelectedData: _action.adminAction.deleteData,
    onUpdateElement: _action.adminAction.updateElement,
    onCreateElement: _action.adminAction.createElement
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminDashboard));