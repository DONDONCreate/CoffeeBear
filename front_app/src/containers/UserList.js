import { connect } from 'react-redux'
import UserTable from '../components/UserTable'
import { changeUserStatus } from '../actions'

const getFilteredUsers = (users, isDone) => {
    return users.filter(u => u.status === isDone);
}

const mapStateToProps = (state, ownProps) => ({
  users: getFilteredUsers(state.users, ownProps.isDone)
})

const mapDispatchToProps = (dispatch) => ({
    onClick: (index) => {
      dispatch(changeUserStatus(index))
  }
})

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTable)

export default UserList
