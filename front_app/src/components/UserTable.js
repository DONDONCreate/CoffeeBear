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

// UserTable
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
                <Table onCellClick={(event) => {
                    this.props.onClick(this.props.users[event].id)}
                }>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.users.map(user =>
                            <TableRow key={user.id}>
                                <TableRowColumn>{user.id}</TableRowColumn>
                                <TableRowColumn>{user.text}</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        )
    }
}

// GETでもらってきたデータをstateして登録
function mapStateToProps(state) {
  const { repos } = state
    return {
        repos
  }
}

export default connect(mapStateToProps)(UserTable);
