import React from 'react';
import {
Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import loadRepos from '../actions'
import { connect } from 'react-redux'


class UserTable extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(loadRepos())
    }


    render(){
        return(
            <MuiThemeProvider>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {console.log(this.props.repos)}
                        {this.props.users.map(user =>
                            <TableRow key={user.id}>
                                <TableRowColumn>{user.id}</TableRowColumn>
                                <TableRowColumn>{user.text}</TableRowColumn>
                                <TableRowColumn>{user.status}</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
  const { repos } = state
    return {
        repos
  }
}

export default connect(mapStateToProps)(UserTable);
