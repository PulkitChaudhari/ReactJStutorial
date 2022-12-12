import React,{forwardRef} from "react";

function User7(props,ref) {
    return(
        <div className="User7">
            <input type="text" ref={ref}></input>
        </div>
    );
}

export default forwardRef(User7);