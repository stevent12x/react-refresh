import React from "react";
import './GoalList.css'

const GoalList = props => {
    return (
        <ul className='goal-list'>
            {props.items.map((item) => {
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
    );
}

export default GoalList