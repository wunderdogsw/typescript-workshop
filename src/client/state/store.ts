import { configureStore, combineReducers } from 'redux-starter-kit'
import { users } from './slices/users'

const reducer = combineReducers({
  users: users.reducer,
})

export const store = configureStore({ reducer })

export type Store = typeof store
