import React, { useState, useEffect } from "react";
import moment from "moment";
import countdown, { MINUTES } from "countdown";
import FlipMove from "react-flip-move";

function TodoItems(props) {
    var todoEntries = props.entries;

    const [currentTime, setCurrentTime] = useState(moment().toISOString());
    
    var listItems = todoEntries.map((d) => (
        <li draggable="true" onDragOver={(e) => allowDrop(e)} onDragStart={(e) => dragStart(e)} onDrop={(e) => dragEnd(e)} onDrag={(e) => storedata(e)} onDragEnd={(e) => movedata(e)} onClick={() => deleteItem(d.key)} value={d.position} key={d.key}>
            {d.text}
            <p className="timeCountdown"><small>Due: {moment(currentTime).to(d.completionTime)}</small></p>
        </li>
    ))

    const deleteItem = (key) => {
        props.delete(key)
    };

    const [position1, setPosition1] = useState();
    const [forceReload, setForceReload] = useState(0)
    const [position2, setPosition2] = useState();
    const storedata = (e) => {
        e.preventDefault();
    }

    const dragStart = (e) => {
        const pos1 = e.target.value
        setPosition1(pos1)
    }
    
    const movedata = (e) => {
        e.preventDefault();
    }

    const allowDrop = (e) => {
        e.preventDefault()
        const pos2 = e.target.value
        setPosition2(pos2)
    }
     
    const dragEnd = (e) => {
        e.preventDefault();

        if (position1 < position2) {
            let i = position1
            while (i <= position2) {
                todoEntries[i].position = todoEntries[i].position - 1
                i++
            }
            todoEntries[position1].position = position2
        }

        if (position2 < position1) {
            let i = position2
            while (i <= position1) {
                todoEntries[i].position = todoEntries[i].position + 1
                i++
            }
            todoEntries[position1].position = position2
        }
        

        todoEntries.sort((a, b) => {
            const posA = a.position
            const posB = b.position
            return posA - posB
        })

        setForceReload(forceReload => forceReload + 1);
    }

    useEffect(() => {
        const clock = setInterval(() => {
            setCurrentTime(moment().toISOString(), 1000)
        }, [currentTime])

        return () => clearInterval(clock)
    })

    return (
        <div>
            <ul className="theList">
                <div>
                    <FlipMove duration={250} easing="ease-out">
                        { listItems }
                    </FlipMove>
                </div>
            </ul>
        </div>
    )
}

export default TodoItems