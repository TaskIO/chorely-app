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
        image
      }
    }
  }`
)
