import React from 'react'
import { Content, Text, Input, Body, Button, Card, CardItem } from 'native-base';

export default function CompleteBounty (props) {
  const { bountyAmount } = props
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>You'll receive {bountyAmount} points for this task.</Text>
            <Text>Time remaining: 2:00:00</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  )
}
