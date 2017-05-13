import React from 'react'
import { Content, Text, Input, Body, Button, Card, CardItem } from 'native-base';

export default function SetBounty (props) {
  const { bountyAmount, changeBounty, setBountyToTask, selectedTask, navigate, viewerUser, viewerGroup } = props
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10, height: 40}}>A fair point wage for this task is...</Text>
            <Input style={{width: 200}} placeholder="Amount (1-100)" value={bountyAmount} onChangeText={changeBounty}>
            </Input>
          </Body>
        </CardItem>
      </Card>
      {+bountyAmount > 0 && +bountyAmount <= 100
        ? <Button onPress={() => {
            setBountyToTask(bountyAmount, viewerUser.id, selectedTask.id)
              .then(() => {
                navigate('Group', {groupId: viewerGroup.id, refresh: true})
              })
              .catch(console.error)
          }}>
          <Text>Confirm Bounty</Text>
        </Button>
        : <Button disabled>
          <Text>Confirm Bounty</Text>
        </Button>
      }
    </Content>
  )
}
