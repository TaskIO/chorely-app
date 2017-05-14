export const createSingleGroup = (name, description) => {
  return `query=mutation CreateGroup($group: groupsInput!) {
  groupsCreate(groups: $group) {
    id
    name
    description
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
