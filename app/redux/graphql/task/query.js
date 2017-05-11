export const getGroupTasksQuery = groupId => (`query=query{ groups(id: ${groupId}) {tasks { id description status }}}`)
