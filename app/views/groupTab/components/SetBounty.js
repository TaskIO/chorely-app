import React from 'react'
import { Content, Text, Input, Body, Button, Card, CardItem } from 'native-base';

export default function SetBounty (props) {
  const { bountyAmount, changeBounty } = props
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text style={{fontSize: 24, paddingTop: 10}}>A fair wage for this task is...</Text>
            <Input placeholder="Amount" value={bountyAmount} onChangeText={changeBounty}>
            </Input>
          </Body>
        </CardItem>
      </Card>
      {+bountyAmount > 0 && +bountyAmount <= 100
        ? <Button>
          <Text>Confirm Bounty</Text>
        </Button>
        : <Button disabled>
          <Text>Confirm Bounty</Text>
        </Button>
      }
    </Content>
  )
}
