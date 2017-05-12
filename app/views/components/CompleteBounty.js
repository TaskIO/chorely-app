import React from 'react'
import { Content, Text, Body, Card, CardItem, Button } from 'native-base';

export default function CompleteBounty (props) {
  const { bountyAmount, viewerUser, selectedTask } = props
  return (
    <Content>
      <Card>
        <CardItem>
          {selectedTask.status === 'Active'
          ?
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>{selectedTask.assignee.name} will receive {bountyAmount} points for this task.</Text>
            <Text>Time remaining: 2:00:00</Text>
            {viewerUser.id === selectedTask.assignee.id
            ?
            <Button>
              <Text>Complete Task</Text>
            </Button>
            :
            null
            }
          </Body>
          :
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>{selectedTask.assignee.name} received {bountyAmount} points for this task.</Text>
          </Body>
          }
        </CardItem>
      </Card>
    </Content>
  )
}
