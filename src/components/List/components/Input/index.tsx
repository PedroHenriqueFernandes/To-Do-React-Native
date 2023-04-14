import { Button, Container, InputText } from './styles'
import { Image } from 'react-native'
import { useContext, useState } from 'react'
import { TaskContext } from '../../../../contexts/TasksContext'
import uuid from 'react-native-uuid'

export function Input() {
  const { addTask } = useContext(TaskContext)
  const [contentNewTask, setContentNewTask] = useState('')

  async function handleAddTask() {
    addTask({
      id: String(uuid.v4()),
      content: contentNewTask,
      isCompleted: false,
    })
    setContentNewTask('')
  }

  return (
    <Container>
      <InputText
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        value={contentNewTask}
        onChangeText={setContentNewTask}
      />
      <Button onPress={handleAddTask}>
        <Image
          source={require('../../../../../assets/plus.png')}
          alt="Add Icon"
        />
      </Button>
    </Container>
  )
}
