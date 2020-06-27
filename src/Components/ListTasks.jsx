import React from 'react';
import '../Style/ListTasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListTasks({tasks, deleteTask, setUpdate}){


    const list = tasks.map((task, index) => {
        
        return (
        <p className="task" key={index}>
            <strong>{index+1} - </strong>
            <input type = "text" 
                value={task}
                onChange={(e) => setUpdate(e.currentTarget.value)}
                onFocus={(e) => {
                    e.currentTarget.style.fontWeight='normal';
                    e.currentTarget.style.backgroundColor='white'
                }}
                onBlur={(e) => {
                    e.currentTarget.style.backgroundColor='transparent';
                    e.currentTarget.style.fontWeight='bolder'
                }}
                />
            <span>
                <FontAwesomeIcon className="trash" 
                    icon='trash' 
                    onClick={() => deleteTask(task)}/>
            </span>
        </p>
        )
    });

    return (
        <div>
        <FlipMove duration={400} easing='ease-in-out'>
        {list}
        </FlipMove>
        </div>
        );
}

export default ListTasks;