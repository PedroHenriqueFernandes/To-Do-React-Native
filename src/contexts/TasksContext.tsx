import React, { createContext, useState } from 'react'

export interface TaskProps {
  id: string
  content: string
  isCompleted: boolean
}

interface TaskContextProps {
  tasks: TaskProps[]
  addTask: (newTask: TaskProps) => void
  removeTask: (id: string) => void
  handleToggleTaskCompletion: (id: string) => void
}

export const TaskContext = createContext({} as TaskContextProps)

interface PropsTasksContext {
  children: React.ReactNode
}

export function TasksProvider({ children }: PropsTasksContext) {
  const [tasks, setTasks] = useState([] as TaskProps[])

  function addTask(newTask: TaskProps) {
    setTasks([...tasks, newTask])
  }

  function removeTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleToggleTaskCompletion(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    )

    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, handleToggleTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  )
}
