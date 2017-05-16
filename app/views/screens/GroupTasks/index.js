'use strict'
//  R/RN/NB components
import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Text, Button, Container, Content, List, Icon, Grid, Col } from 'native-base'

// additional components
import AddFAB from '../../components/AddFAB'
import ReturnFAB from '../../components/ReturnFAB'
import MemberTaskFAB from '../../components/MemberTaskFAB'
import TaskListItem from '../../components/TaskListItem'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { selectGroup } from '../../../redux/reducers/groups'
import { setSelectedTask } from '../../../redux/reducers/tasks'
import { setGroupInterval } from '../../../redux/reducers/polls'

class GroupTasks extends React.Component {

  componentDidMount() {
    clearInterval(this.props.pollId)
    const groupId = this.props.navigation.state.params.groupId
    this.props.selectGroup(groupId)
    this.props.setGroupInterval(setInterval(() => {
      this.props.selectGroup(groupId)
    }, 10000))
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
        <Content contentContainerStyle={s.content}>
        {(this.props.tasks.length)
        ?
          <List style={s.list}>
            {this.props.tasks.map( task => {
              return <TaskListItem
                key={task.id}
                task={task}
                navigate={navigate}
                viewerUser={this.props.viewerUser}
                setSelectedTask = {this.props.setSelectedTask}
              />
            })}
          <Button iconLeft transparent style={s.filter}>
            <Icon style={s.midnightIcon} name="funnel"/>
            <Text style={s.midnight}>Filter Tasks</Text>
          </Button>
          </List>
        :
          <Grid style={s.grid}>
          <Col style={s.column}>
            <Text style={s.mainText}>No tasks yet</Text>
            <Text style={s.parenthetical}>(Add one below)</Text>
          </Col>
          </Grid>
        }
        <AddFAB
          navigate={navigate}
          location={'NewTask'}
        />
        <ReturnFAB
          goBack={()=>navigate('Home')}
        />
        <MemberTaskFAB
          navigate={navigate}
          icon={'people'}
          location={'GroupMembers'}
          locationParams={{groupId: this.props.group.id}}
        />
        </Content>
        </Image>
      </Container>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapState = state => {
  return {
    pollId: state.polls.groupInterval,
    group: state.groups.viewerGroup,
    tasks: state.tasks.groupTasks,
    viewerUser: state.users.viewerUser
  }
}

const mapDispatch = { selectGroup, setSelectedTask, setGroupInterval }

export default connect(mapState, mapDispatch)(GroupTasks)
