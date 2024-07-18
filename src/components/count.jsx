import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useReducer, useState } from "react";

export default function Counter() {

    const selector = useSelector(state => state.count);
    const reducer = useReducer((state, action) => {
        switch (action) {
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            default:
                return state
        }
    })
    const [counter, setCounter] = useState(0);

    const increment = () => {
        reducer.dispatch("increment")
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <Button onClick={decrement} >Decrement</Button>
            <span>{selector}</span>
            <Button onClick={increment}>Increment</Button>
        </div>
    )
}