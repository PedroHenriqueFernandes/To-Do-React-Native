import { Button, Container, InputText } from "./styles";
import { Image } from "react-native";
import { useContext } from "react";
import { TaskContext } from "../../../../contexts/TasksContext";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export function Input() {
    const {addTask} = useContext(TaskContext)
    const [contentNewTask, setContentNewTask] = useState("")

    function handleAddTask(){
        addTask({
            id: 'cafe',
            content: contentNewTask,
            isCompleted: false
        })
    }

    return (
        <Container>
            <InputText
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={"#808080"}
                value={contentNewTask}
                onChangeText={setContentNewTask}
            />
            <Button onPress={handleAddTask}>
                <Image source={require("../../../../../assets/plus.png")} />
            </Button>
        </Container>
    )
}