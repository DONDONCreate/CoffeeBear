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

class UserTable extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
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

export default UserTable;
