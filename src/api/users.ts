import type { Token, User, UserCreate } from '@/interfaces'
import { apiFetch } from '.'

export async function getUsers(): Promise<User[]> {
  return await apiFetch('/users')
}

export async function createUser(user:UserCreate): Promise<User> {
  return await apiFetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}
export async function login(username: string, password: string): Promise<Token> {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)

  return await apiFetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
}
