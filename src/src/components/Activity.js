import React, { Component, createElement } from "react";
import './activity.css';

class Activity extends Component {
    state = {
        // height: 100,
        color: 'hotpink'
    }

    isResizing = false;
    resizingYStart = 0;

    // mouseDownHandler(e) {
    //     // this.isResizing = true;
    //     this.props.setIsResizing(true);
    //     this.props.
    //     // this.resizingYStart = e.clientY;
    //     // this.setState((state) => {
    //     //     return {
    //     //         ...state,
    //     //         height: state.height + 50
    //     //     }
    //     // });
    //     // console.log(`this.resizingYStart: ${this.resizingYStart}`)

    // }

    // mouseUpHandler() {
    //     if (this.isResizing) {
    //         this.isResizing = false;
    //         this.setState((state) => {
    //             const snappedHeight = state.height - (state.height % 50)
    //             return {
    //                 ...state,
    //                 height: snappedHeight
    //             }
    //         })

    //     }
    // }



    render() {
        const style = {
            height: this.props.height,
            width: this.state.width,
            backgroundColor: this.state.color,
        }

        return (
            <div
                className="activity" style={style}>
                <div className='activity__dragUp'
                ></div>
                <div className='activity__dragDown'
                    onMouseDown={(e) => {this.props.startResizing(e.currentTarget)}}
                ></div>
            </div>
        )
    }
}

export default Activity;