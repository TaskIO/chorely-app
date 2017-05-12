export const getAllViewerGroupsQuery = () => ('query={ groups { name id }}')
export const getAllGroupUsersQuery = (id) => (`query={ groups(id: "${id}") { name users { id name email }}}`)
export const getViewerGroupQuery = groupId => (`query={ groups(id: ${groupId}) { id name description image }}`)

