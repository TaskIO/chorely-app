export const getGroup = groupId => (
  `query={
    groups(where: {id: ${groupId}}) {
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
        creator {
          id
          name
        }
        assignee {
          id
          name
        }
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
  }`
)
