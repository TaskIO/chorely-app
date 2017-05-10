import React from 'react'
import { Text, Button, Content, Body, ListItem, Radio } from 'native-base'

export default function ChangeGroup (props) {
  const { groupList, group, viewerGroups, toggleGroupList, changeGroup } = props.parentProps
  return (
    <Content>
      <Body style={{flexDirection: 'row'}}>
        <Button
          onPress={toggleGroupList}
          style={{flex: 1, maxWidth: 200, justifyContent: 'center'}}>
          <Text>Change Group</Text>
        </Button>
      </Body>
      {groupList
      ? viewerGroups.map(viewerGroup => {
        return (
          <ListItem key={viewerGroup.id}>
            <Radio selected={group.id === viewerGroup.id} />
            <Button transparent onPress={() => changeGroup(viewerGroup)}>
              <Text>{viewerGroup.name}</Text>
            </Button>
          </ListItem>
        )
      })
      : null
      }
    </Content>
  )
}
