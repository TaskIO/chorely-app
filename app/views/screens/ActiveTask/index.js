'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Grid, Col, Text } from 'native-base'

// additional components
import ReturnFAB from '../../components/ReturnFAB'
import SubmitFAB from '../../components/SubmitFAB'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { taskStatusComplete } from '../../../redux/reducers/tasks'

class ActiveTask extends React.Component {
  constructor(props) {
    super(props)
    this.maxBounty = this.maxBounty.bind(this)
  }

  maxBounty(bountiesArr) {
    return bountiesArr.reduce((oldMax, newMax) => {
      oldMax = (typeof oldMax === 'object') ? oldMax.amount : oldMax
      return (Math.max(oldMax, newMax.amount))
    })
  }

  render() {
    const task = this.props.task
    const assigneeName = (task.assignee.id === this.props.viewerUser.id) ? 'You' : task.assignee.name
    const amount = this.maxBounty(task.bounties)

    return (
      <Container>
      <Image source={welcomeScreenBg} style={s.imageContainer}>
      <StatusBar hidden={true} />
      <Content contentContainerStyle={s.content} >
      <Grid style={s.grid}>
        <Col style={s.column}>
          <Text style={s.mainText}>{`${task.description} is awaiting completion! ${assigneeName} will receive ${amount} points when the task is complete.`}</Text>
          <Text style={s.parenthetical}>(Complete below)</Text>
        </Col>
      </Grid>
      <ReturnFAB
        goBack={this.props.navigation.goBack}
      />
      {
        (task.assignee.id === this.props.viewerUser.id) &&
        <SubmitFAB
          submitAction={this.props.taskStatusComplete}
          state={task}
          location={'GroupTasks'}
          locationParams={{groupId: this.props.viewerGroup.id}}
          navigate={this.props.navigation.navigate}
        />
      }
      </Content>
      </Image>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    viewerUser: state.users.viewerUser,
    viewerGroup: state.groups.viewerGroup,
    task: state.tasks.selectedTask
  }
}

const mapDispatch = { taskStatusComplete }

export default connect(mapState, mapDispatch)(ActiveTask)
