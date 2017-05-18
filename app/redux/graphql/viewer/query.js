export const getViewer = email => (
  `query={
    users(where: {email: "${email}"}) {
      id
      name
      image
      phoneNumber
      email
      groups {
        id
        name
        description
        icon
      }
    }
  }`
)


export const getUserId = email => (
  `query={
    users(where: {email: "${email}"}) {
      id
    }
  }`
)
