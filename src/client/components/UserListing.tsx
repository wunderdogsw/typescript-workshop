import { connect } from 'react-redux'
import React from 'react'
import { State } from '../state'

type Props = {
  users: readonly string[]
}

export const UserListing = ({ users }: Props) => (
  <ol>
    {users.map(user => (
      <li key={user}>{user}</li>
    ))}
  </ol>
)

const mapStateToProps = ({ users }: State) => ({
  users: users.users,
})

export default connect(mapStateToProps)(UserListing)
