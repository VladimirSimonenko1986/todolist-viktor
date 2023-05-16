import React, {FC} from 'react';
import {FilterValuesType} from "./App";




type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
    removeTask: (taskId: number)=>void
    changeFilter: (filter: FilterValuesType)=> void
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string
}
const Todolist: FC<TodolistPropsType> = ({
                                             tasks,
                                             title,
                                             removeTask,
                                             changeFilter
                                         }) => {
    const tasksJsx: Array<JSX.Element> = tasks.map((task) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={()=>removeTask(task.id)}>X</button>
            </li>

        )
    })
    return (
        <div>
            <div className='todolist'>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksJsx}
                </ul>
                <div>
                    <button onClick={()=>changeFilter('All')}>All</button>
                    <button onClick={()=>changeFilter('Active')}>Active</button>
                    <button onClick={()=>changeFilter('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Todolist;