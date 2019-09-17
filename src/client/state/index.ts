import { EnhancedStore, Action } from 'redux-starter-kit'
import { Store } from './store'
import { ThunkDispatch as BaseDispatch, ThunkAction as BaseThunkAction } from 'redux-thunk'

export type State = Store extends EnhancedStore<infer State, Action<string>> ? State : never

export type ThunkAction<R> = BaseThunkAction<R, State, {}, Action>

export type AsyncThunkAction<R> = BaseThunkAction<Promise<R>, State, {}, Action>

export type Dispatch = BaseDispatch<State, {}, Action>
