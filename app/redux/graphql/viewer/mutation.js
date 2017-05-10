import {viewerUser} from './query'

export const postCreateAccountMutation = (user)=>(`mutation { usersCreate(users: {name: "${user.name}", email: "${user.email}", password: "${user.password}"}){${viewerUser}}}`)
