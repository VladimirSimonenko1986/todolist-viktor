import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";


export type FilterValuesType = 'All' | 'Active' | 'Completed'


function App() {

    const title: string = 'What to learn'

    const [tasks, setTasks,] = React.useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'React', isDone: false}
        ]
    )

    const [filter, setFilter] = useState<FilterValuesType>('All')

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


    const removeTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const getFilterTasks = (tasks: Array<TaskType>, filter: FilterValuesType) : TaskType[] => {
        switch (filter) {
            case "Active":
                return tasks.filter(t => !t.isDone)
            case "Completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const filteredTasks = getFilterTasks(tasks, filter)

    return (
        <div className="App">
            <Todolist
                changeFilter={changeFilter}
                removeTask={removeTask}
                tasks={filteredTasks}
                title={title}/>

        </div>


    );
}


export default App;
