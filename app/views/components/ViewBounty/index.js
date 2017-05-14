import React from 'react'
import { Content, Text, Body, Card, CardItem } from 'native-base';

export default function ViewBounty (props) {
  const { bountyAmount } = props
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>{bountyAmount} points is a fair wage for this task.</Text>
            <Text>Time remaining: 2:00:00</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  )
}
