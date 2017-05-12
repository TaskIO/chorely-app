export const getViewer = (email)=>(
`query={
  users(where: {email: "J@g.com"}) {
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
      users {
        id
        name
        image
        phoneNumber
        email
      }
      tasks {
        id
        description
        status
        creator_id
        assignee_id
        bounties {
          id
          amount
          user {
            id
            name
          }
        }
      }
    }
  }
}`
)
