export const getGroupTasksQuery = groupId => (`query{ groups(id: ${groupId}) {tasks { id description status }}}`)
