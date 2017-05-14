'use strict'
import React from 'react'
import { StatusBar, Image,TouchableOpacity } from 'react-native'
import { Text, Button, Container, Content, List, Header, Item, Tabs, Tab, Icon, Input,Fab } from 'native-base'
import AddFAB from '../../components/AddFAB'
import { connect } from 'react-redux'
import TaskListItem from '../../components/TaskListItem'
import MemberList from '../../components/MemberList'
import { selectGroup } from '../../../redux/reducers/groups'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

class SingleGroup extends React.Component {
  componentDidMount() {
    // const groupId = this.props.navigation.state.params.groupId
    //console.log(DELTE THIS AND CHANE THE HARDCODE BELOW)
    this.props.selectGroup(1)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
        <Content contentContainerStyle={s.content}>

        <List style={s.list}>
          {this.props.tasks.map( task => {
            return <TaskListItem
              key={task.id}
              task={task}
              navigate={navigate}
            />
          })}
        <Button iconLeft transparent style={{
          alignSelf:'center',
          justifyContent:'center',
          alignContent:'center',
        }}>
          <Icon style={s.midnightIcon} name="funnel"/>
          <Text style={s.midnight}>Filter Tasks</Text>
        </Button>
        </List>
        <AddFAB
          navigate={navigate}
          location={'NewTask'}
        />
        </Content>
        </Image>
      </Container>
    )
  }
}


const mapState = state => {
  return {
    tasks: state.tasks.groupTasks
  }
}

const mapDispatch = {selectGroup}

export default connect(mapState, mapDispatch)(SingleGroup)


//   <Button transparent onPress={() => navigate('NewTask')}>
//     <Icon name="add-circle" />
//   </Button>
// </Header>

// <Tabs>
//   <Tab heading="Tasks">
//
//   </Tab>
//   <Tab heading="Members">
//     <MemberList />
//   </Tab>
// </Tabs>
