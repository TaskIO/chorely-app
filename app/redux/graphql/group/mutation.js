export const createSingleGroup = (name, description) => {
  return `query=mutation CreateGroup($group: groupsInput!) {
  groupsCreate(groups: $group) {
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
}&operationName=CreateGroup&variables={
      "group": {
        "name": "${name}",
        "description": "${description}"
      }
    }`
}

export const associateUserAndGroup = (userId, groupId) => {
  return `query=mutation associateUserAndGroup($userGroups: userGroupsInput!) {
  userGroupsCreate(userGroups: $userGroups) {
    user_id
    group_id
  }
}&operationName=associateUserAndGroup&variables={
      "userGroups": {
        "user_id": ${userId},
        "group_id": ${groupId}
      }
    }`
}
