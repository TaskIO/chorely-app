import React from 'react'
import { Content, Text, Body, Card, CardItem, Button } from 'native-base';

export default function CompleteBounty (props) {
  const { bountyAmount, viewerUser, selectedTask, navigate, viewerGroup, completeTask } = props
  return (
    <Content>
      <Card>
        <CardItem>
          {selectedTask.status === 'Active'
          ?
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>{selectedTask.assignee.name} will receive {bountyAmount} points from {selectedTask.debtor.name} for this task.</Text>
            <Text>Time remaining: 2:00:00</Text>
            {viewerUser.id === selectedTask.assignee.id
            ?
            <Button onPress={() => {
              completeTask(selectedTask.id)
                .then(() => {
                  navigate('GroupTasks', {groupId: viewerGroup.id})
                })
                .catch(console.error)
            }}>
              <Text>Complete Task</Text>
            </Button>
            :
            null
            }
          </Body>
          :
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>{selectedTask.assignee.name} received {bountyAmount} points from {selectedTask.debtor.name} for this task.</Text>
          </Body>
          }
        </CardItem>
      </Card>
    </Content>
  )
}
