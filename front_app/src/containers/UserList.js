import { connect } from 'react-redux'
import UserTable from '../components/UserTable'
import { updateUser } from '../actions'

const getFilteredUsers = (users, isDone) => {
    return users.filter(u => u.is_payment === isDone);
}

const mapStateToProps = (state, ownProps) => ({
  users: getFilteredUsers(state.users, ownProps.isDone),
  isDone: ownProps.isDone
})

const mapDispatchToProps = (dispatch) => ({
    onClick: (index) => {
      dispatch(updateUser(index))
  }
})

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTable)

export default UserList
