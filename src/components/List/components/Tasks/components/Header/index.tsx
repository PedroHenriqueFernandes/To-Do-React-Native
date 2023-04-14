import { Container, Counter, TextContainer, TextCounter } from './styles'
import {
  SummaryTaskBlue,
  SummaryTaskPurple,
} from '../../../../../../styles/fonts/fonts'
import { Text } from 'react-native'
import { useContext } from 'react'
import { TaskContext } from '../../../../../../contexts/TasksContext'

export function Header() {
  const { tasks } = useContext(TaskContext)
  const tasksCompleted = tasks.filter((task) => task.isCompleted === true)

  return (
    <Container>
      <TextContainer>
        <SummaryTaskBlue>
          <Text>Criadas</Text>
        </SummaryTaskBlue>
        <Counter>
          <TextCounter>{tasks.length}</TextCounter>
        </Counter>
      </TextContainer>
      <TextContainer>
        <SummaryTaskPurple>
          <Text>Concluídas</Text>
        </SummaryTaskPurple>
        <Counter>
          <TextCounter>{tasksCompleted.length}</TextCounter>
        </Counter>
      </TextContainer>
    </Container>
  )
}
