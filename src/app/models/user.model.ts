export interface UserModel {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
  address: {
    street: string
  },
  company: {
    name: string
  }
}
