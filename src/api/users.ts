import type { User } from '@/interfaces'
import { BASE_URL } from '.'

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`)
  return response.json()
}
