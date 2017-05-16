export const getGroup = groupId => (
  `query={
    groups(where: {id: ${groupId}}) {
      id
      name
      description
      icon
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
        debtor {
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
