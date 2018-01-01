import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import loadRepos, { removeUsers } from '../actions'
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

    clickButton(id) {
        const { dispatch } = this.props
        let myRet = window.confirm("本当に削除しますか？");
        if ( myRet === true ){
            dispatch(removeUsers(id))
        }else{
            alert("削除がキャンセルされました");
  }
    }

    render(){
        return(
        <div style={{border: this.props.isDone ? '2px solid #2196F3' : '2px solid #F44336', height:'365px'}}>
          <div align='center'>{this.props.isDone ? 'Done' : 'Not Done' }</div>
          <MuiThemeProvider>
            <Table
              height={'285px'}
              fixedHeader={true}
              fixedFooter={true}
              selectable={true}
              multiSelectable={true}
            >
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn></TableHeaderColumn>
                  <TableHeaderColumn></TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {console.log(this.props.users)}
                {this.props.users.map(user =>
                            <TableRow key={user.id}>
                              <TableRowColumn  >{user.id}</TableRowColumn>
                              <TableRowColumn  >{user.text}</TableRowColumn>
                              <TableRowColumn  ><RaisedButton onClick={() => this.props.onClick(user.id)} label="Status変更" /></TableRowColumn>
                              <TableRowColumn  ><RaisedButton onClick={() => this.clickButton(user.id)} label="削除"/></TableRowColumn>
                            </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </MuiThemeProvider>
                </div>
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
