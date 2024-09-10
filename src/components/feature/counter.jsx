import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementConter } from "../../store/conter";

const Counter = () => {
    const [count, setCount] = useState(0);
    const selector = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-4 h-screen">
                <h1 className="text-center font-bold">Local State</h1>
                <Button onClick={decrement}>-</Button>
                <p>{count}</p>
                <Button onClick={increment}>+</Button>
                <h1 className="text-center font-bold">Global State</h1>
                <Button onClick={() => dispatch(decrementCounter())}>-</Button>
                <p>{selector}</p>
                <Button onClick={() => dispatch(incrementConter())}>+</Button>
            </div>
        </div>
    );
};

export default Counter;
