'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Body, Header, Title } from 'native-base'

// additional components
import SetBounty from '../../components/SetBounty'
import ViewBounty from '../../components/ViewBounty'
import CompleteBounty from '../../components/CompleteBounty'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { addBountyToTask, taskStatusComplete } from '../../../redux/reducers/tasks'

class CompleteTask extends React.Component {
  render() {
    return (
      <Container>
      <Image source={welcomeScreenBg} style={s.imageContainer}>
      <StatusBar hidden={true} />
      <Content contentContainerStyle={s.content} >
      <Grid style={s.grid}>
        <Col style={s.column}>
          <Text style={s.mainText}>No tasks yet</Text>
          <Text style={s.parenthetical}>(Add one below)</Text>
        </Col>
      </Grid>
      </Content>
      </Image>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      selectedTask: state.tasks.selectedTask,
      viewerUser: state.users.viewerUser,
      viewerGroup: state.groups.viewerGroup
    }
  },
  dispatch => {
    return {
      setBountyToTask: (amount, userId, taskId, groupId) => {
        return dispatch(addBountyToTask(amount, userId, taskId, groupId))
      },
      completeTask: taskId => {
        return dispatch(taskStatusComplete(taskId))
      }
    }
  }
)(
  CompleteTask
)

// export default connect(
//   state => {
//     return {
//       selectedTask: state.tasks.selectedTask,
//       viewerUser: state.users.viewerUser,
//       viewerGroup: state.groups.viewerGroup
//     }
//   },
//   dispatch => {
//     return {
//       setBountyToTask: (amount, userId, taskId, groupId) => {
//         return dispatch(addBountyToTask(amount, userId, taskId, groupId))
//       },
//       completeTask: taskId => {
//         return dispatch(taskStatusComplete(taskId))
//       }
//     }
//   }
// )(
//   CompleteTask
// )
// // {selectedTask.status === 'Pending'
//           ?
//           <Content>
//             {bountyStatus
//             ? <ViewBounty amount={amount} />
//             : <SetBounty
//                 amount={amount}
//                 handleBountyChange={this.handleBountyChange}
//                 setBountyToTask={setBountyToTask}
//                 viewerGroup={viewerGroup}
//                 selectedTask={selectedTask}
//                 navigate={navigate}
//                 viewerUser={viewerUser}
//                 />
//             }
//           </Content>
//           :
//           <CompleteBounty
//             amount={previousAmount}
//             selectedTask={selectedTask}
//             viewerUser={viewerUser}
//             navigate={navigate}
//             viewerGroup={viewerGroup}
//             completeTask={completeTask}
//             />
//           }
    // const { navigate } = this.props.navigation
    // const { selectedTask, setBountyToTask, viewerGroup, viewerUser, completeTask } = this.props
    // let { amount } = this.state
    // let previousAmount = 0
    // const bountyStatus = selectedTask.bounties && selectedTask.bounties.some(bounty => {
    //   return bounty.user.id === viewerUser.id
    // })
    // selectedTask.bounties && selectedTask.bounties.forEach(bounty => {
    //   if (bounty.amount > previousAmount) previousAmount = bounty.amount
    //   if (bounty.user.id === viewerUser.id) amount = bounty.amount
    // })
