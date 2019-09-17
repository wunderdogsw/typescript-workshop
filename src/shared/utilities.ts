import { Immutable } from 'immer'

// Requires installing immer separately, redux-starter-kit Immutable type differs a bit.
export const immutable = <T>(value: T): Immutable<T> => value as Immutable<T>
