export const getAllViewerGroupsQuery = () => ('query={ groups { name id }}')
export const getAllGroupUsersQuery = () => ('query={ groups(id: 1) { name users { id name email }}}')
export const getViewerGroupQuery = groupId => (`query={ groups(id: ${groupId}) { id name description image }}`)
