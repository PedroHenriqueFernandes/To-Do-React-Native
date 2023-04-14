import { Input } from './components/Input'
import { Tasks } from './components/Tasks'
import { Container } from './styles'

export function List() {
  return (
    <Container>
      <Input />
      <Tasks />
    </Container>
  )
}
