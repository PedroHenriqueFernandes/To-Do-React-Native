import { useContext } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { TaskContext, TaskProps } from '../../../../../../contexts/TasksContext'
import { CheckButton, Container, TextContainer } from './style'

export function Task({ id, content, isCompleted }: TaskProps) {
  const { removeTask, handleToggleTaskCompletion } = useContext(TaskContext)

  function handleRemoveTask() {
    removeTask(id)
  }

  function handleToggleTask() {
    handleToggleTaskCompletion(id)
  }

  const statusTask = isCompleted ? 'isChecked' : 'isNotChecked'

  return (
    <Container>
      <CheckButton onPress={handleToggleTask} statusTask={statusTask}>
        {isCompleted && (
          <Image
            source={require('../../../../../../../assets/check.png')}
            alt="Check Icon"
          />
        )}
      </CheckButton>
      <TextContainer>
        <Text>{content}</Text>
      </TextContainer>
      <TouchableOpacity onPress={handleRemoveTask}>
        <Image
          source={require('../../../../../../../assets/trash.png')}
          alt="Trash Icon"
        />
      </TouchableOpacity>
    </Container>
  )
}
