import React, {useRef} from "react";

export default function Task(props){

    const editRef = useRef()


    return (
       <div className="task" >
        <div className="row-con">
            <div className="flex-con pointer-hover" onClick={() => props.markComplete(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke={props.completed? "#2ecc71" : "grey"} height="24px" width="24px">
                            <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div className="flex-con">
                {props.editMode ? 
                    <form onSubmit={(event) => props.edit(event,editRef, props.id)}><input className="add-todo-input edit-input" placeholder={props.text} ref={editRef}></input><input className="submit-edit" type="submit"></input></form> 
                    : 
                    <p className="task-text" style={{color: props.completed? "#2ECC71" : ""}}>{props.text}</p>}
            </div>
        </div>
        <div className="row-con1">
            <div className="flex-con pointer-hover" onClick={() => props.toggleEdit(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px">
                    <path fill="#808080" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/>
                </svg>
            </div>
            <div className="flex-con pointer-hover" onClick={() => props.delete(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18px" width="18px">
                    <path fill="#808080" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </div>
        </div>
       </div>
    )
}