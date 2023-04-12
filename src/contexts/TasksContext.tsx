import React, { createContext, useState } from 'react';

export interface TaskProps{
    id: string;
    content: string;
    isCompleted: boolean;
}

interface TaskContext {
  tasks: TaskProps[];
  addTask: (newTask: TaskProps) => void;
}

export const TaskContext = createContext({} as TaskContext);

interface PropsTasksContext {
    children: React.ReactNode;
}

export function TasksProvider ({children}: PropsTasksContext) {
const [tasks, setTasks] = useState([{
    id: '1',
    content: 'Estudar React',
    isCompleted: false
}] as TaskProps[])

  function addTask(newTask: TaskProps) {
    setTasks([...tasks, newTask])
  }

    
  return (
    <TaskContext.Provider value={{tasks, addTask}}>
      {children}
    </TaskContext.Provider>
  );
};