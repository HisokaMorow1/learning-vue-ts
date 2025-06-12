export interface User {
  id: number
  username: string
}

export interface Token {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
}