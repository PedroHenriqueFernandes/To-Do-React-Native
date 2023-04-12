import { useContext } from "react";
import { TaskContext } from "../../../../contexts/TasksContext";
import { Header } from "./components/Header";
import { NoHaveTasks } from "./components/NoHaveTasks";
import { Task } from "./components/Task";
import { Container, TasksContainer } from "./styles";

export function Tasks() {
    const {tasks} = useContext(TaskContext)

    return (
        <Container>
            <Header />
            <TasksContainer>
                {tasks.length > 0 ? tasks.map(
                    task => 
                    <Task 
                    key={task.id} 
                    id={task.id} 
                    content={task.content} 
                    isCompleted={task.isCompleted} />
                ) : 
                <NoHaveTasks />
                }
            </TasksContainer>
            
        </Container>
    )
}