import { connect } from 'react-redux'
import UserTable from '../components/UserTables'

const mapStateToProps = (state) => ({
  users: state.users
})

const UserList = connect(
  mapStateToProps
)(UserTable)

export default UserList