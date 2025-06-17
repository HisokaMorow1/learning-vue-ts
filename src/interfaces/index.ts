export interface UserBase {
  username: string
}

export interface User extends UserBase{
  id: number
}

export interface UserCreate extends UserBase {
  password: string
}

export interface Token {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
}
