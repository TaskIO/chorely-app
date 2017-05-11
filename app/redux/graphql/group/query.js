export const getAllGroupUsersQuery = (id) => (`query={ groups(id: "${id}") { name users { id name email }}}`)
