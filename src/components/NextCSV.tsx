import React from "react";
type Props = {
    month: number
    date: number
}

const NextCSV = (props: Props) =>{
    return(
        <div>
            <h1>Next CSV大学院 ... {props.month}月 {props.date}日</h1>
        </div>
    );
}

export default NextCSV;