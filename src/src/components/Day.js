import React, { Fragment, useState, createElement } from "react";
import Activity from "./Activity";
import './day.css';

function Day(props) {
    const [activities] = useState([]);
    const [height, setHeight] = useState(100);
    const [isResizing, setIsResizing] = useState(false);
    const [el, setEl] = useState();

    function startResizing(newEl) {
        setEl(newEl);
        setIsResizing(true);
    }

    function mouseMoveHandler(e) {
        if (isResizing && el) {
            // console.log(previous);
            const newHeight = height + (e.clientY - el.getBoundingClientRect().bottom);
            console.log(newHeight);
            // console.log(`previous: ${previous}`);
            setHeight(newHeight);
            // previous = e.clientY;
        }
    }


    // function mouseMoveHandler(e) {
    //     // console.log(this.isResizing);
    //     if (this.isResizing) {
    //         // console.dir(e.currentTarget);
    //         // console.log(e.currentTarget.getBoundingClientRect());
    //         const el = e.currentTarget;
    //         const elDimensions = el.getBoundingClientRect();
    //         const dimensions = {
    //             top: elDimensions.top,
    //             bottom: elDimensions.bottom,
    //             height: elDimensions.height,
    //             mouse: e.clientY
    //         }
    //         console.log(dimensions);

    //         // console.log(e.currentTarget.getBoundingClientRect().bottom);
    //         // console.log('e.clientY: ' + e.clientY);
    //         const height = elDimensions.height + (e.clientY - e.currentTarget.getBoundingClientRect().bottom);
    //         // console.log({
    //         //     bottom: e.currentTarget.getBoundingClientRect().bottom,
    //         //     offsetHeight: e.currentTarget.offsetHeight,
    //         //     resizingYStart: this.resizingYStart,
    //         //     clientY: e.clientY,
    //         //     resultaat: (e.clientY - this.resizingYStart)

    //         // })
    //         // console.log({difference, yStart: this.resizingYStart, currentY: e.clientY});
    //         this.setState((state) => {
    //             return {
    //                 ...state,
    //                 height
    //             }
    //         })

    //     }
    // }

    return (
        <Fragment>
            <div
            onMouseMove={mouseMoveHandler} 
            onMouseUp={() => setIsResizing(false)} 
            className={'day ' + (props.isWeekend ? 'weekend' : '')}><h2>{props.day}</h2><Activity startResizing={startResizing} setIsResizing={setIsResizing} height={height} key="0" /></div>
        </Fragment>
    );
}
export default Day;
