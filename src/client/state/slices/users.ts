import { UsersResponse } from '~/shared/responses'
import { PayloadAction, createSlice } from 'redux-starter-kit'
import { AsyncThunkAction } from '~/client/state'
import { immutable } from '~/shared/utilities'

const initialState = immutable({
  error: '',
  users: Array<string>(),
})

export const users = createSlice({
  slice: 'users',
  initialState,
  reducers: {
    usersLoaded({ users }, { payload }: PayloadAction<UsersResponse>) {
      users.push(...payload.users)
    },
    loadUsersFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload
    },
  },
})

export const loadUsers = (): AsyncThunkAction<void> => async dispatch => {
  try {
    const result = await fetch(`http://localhost:3000/api/users`)
    const json: UsersResponse = await result.json()

    dispatch(users.actions.usersLoaded(json))
  } catch (err) {
    dispatch(users.actions.loadUsersFailed(err.message))
  }
}
