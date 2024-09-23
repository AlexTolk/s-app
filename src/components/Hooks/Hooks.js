import { useCallback, useState, useRef } from 'react';
import './Hooks.css';

export default function Hooks() {
    const [counter, setCounter] = useState(0);
    const [isOpened, setIsOpened] = useState(false);

    
    const increaseCounter = useCallback(() => {
        setCounter(() => counter + 1);
    }, [counter])

    const inputRef = useRef(null);

    function handleInputFocus() {
        inputRef.current.focus()
    }

    function handleInputValue() {
        inputRef.current.value = 'Alexander'
    }

    return (
        <div className='home-main-wrapper'>
            <h2>Hooks</h2>
            <p>Counter: {counter}</p>
            <div className='button-container'>
                <button onClick={increaseCounter}>+</button>
                <button onClick={() => setIsOpened(!isOpened)}>{isOpened ? 'Close' : 'Open'}</button>
            </div>
            <div>
                {isOpened && <p>I'm opened!</p>}
            </div>
            <div className='input-group'>
                <input type="text" ref={inputRef}></input>
                <button onClick={handleInputFocus}>Input</button>
            </div>
            <div>
                <button onClick={handleInputValue}>Paste name</button>
            </div>
        </div>
    );
}
