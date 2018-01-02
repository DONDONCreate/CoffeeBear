import { connect } from 'react-redux'
import CoffeeBar from '../components/CoffeeBar'
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

const CoffeeList = connect(
)(CoffeeBar)

export default CoffeeList
