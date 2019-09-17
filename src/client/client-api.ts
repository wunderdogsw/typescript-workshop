import { UsersResponse } from '~/shared/responses'

const host = 'http://localhost:3000'

export const fetchUsers = async (): Promise<UsersResponse> => {
  const result = await fetch(`${host}/api/users`)
  return result.json()
}
