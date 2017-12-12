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

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const UserTables = (users) => (
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
                {console.log(users)}
                {users.users.map(user =>
                    <TableRow key={user.id}>
                        <TableRowColumn>{user.id}</TableRowColumn>
                        <TableRowColumn>{user.text}</TableRowColumn>
                        <TableRowColumn>{user.status}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </MuiThemeProvider>
);

export default UserTables;
