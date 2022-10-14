import {createElement} from 'react';

import './week.css';
import Day from "./Day";


function Week(){
    const days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
    return (
        <div className = 'week'>{
            days.map((day, i) => <Day isWeekend = {i === 5 || i === 6} key = {i} day = {day}/>)
        }</div>
    )
}

export default Week;

