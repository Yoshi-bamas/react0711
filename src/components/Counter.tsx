import React,{useState} from 'react'

const Counter = () => {
    const [count,setValue] = useState<number>(0)
    const countUp = () => {
        setValue(prevState => prevState + 1)
    }
    // prevState が直前の数字を指し示している
    const countDown = () => {
        setValue(prevState => prevState - 1)
    }
    return(
        <div>
            <p>カウント： {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
}

export default Counter;