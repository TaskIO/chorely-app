export const createNewTaskWithBounty = (description, groupId, creatorId, amount) => {
  return (
    `query=mutation CreateTaskForGroup($task: tasksInput!, $bounty: bountiesInput!) {
      tasksCreate(tasks: $task) {
        id
        description
        status
      }
      bountiesCreate(bounties: $bounty) {
        id
        amount
      }
    }&operationName=CreateTaskForGroup&variables={
      "task": {
        "description": "${description}",
        "status": "Pending",
        "group_id": ${groupId},
        "creator_id": ${creatorId}
      },
      "bounty": {
        "amount": ${amount},
        "user_id": ${creatorId}
      }
    }`
  )
}

export const associateTaskAndBounty = (taskId, bountyId) => {
  return (
    `query=mutation LinkBountyWithTask($bountyTask: bountyTasksInput!) {
      bountyTasksCreate(bountyTasks: $bountyTask) {
        bounty_id
        task_id
      }
    }&operationName=LinkBountyWithTask&variables={
      "bountyTask": {
        "bounty_id": ${bountyId},
        "task_id": ${taskId}
      }
    }`
  )
}
