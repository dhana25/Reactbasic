import { useReducer } from "react"

const Ureducer = () => {

    // const [count, chCount] = useState(0);
    // const [color, chColor] = useState(false);
    // const [text, chText] = useState("");

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'decrement':
                return {
                    ...state,
                    count: state.count - 1
                }

            case 'colorchange':
                return {
                    ...state,
                    color: !state.color
                }

            case 'textchange':
                return {
                    ...state,
                    textinp: action.payload
                }

            default : return state    
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0, color: false, textinp: "" })

    return (
        <>
            <h3>Use Reducer</h3>
            <div className="App" style={{ color: state.color ? 'orange' : 'blue' }}>
                <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
                &nbsp;<b>{state.count}</b>&nbsp;
                <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
                <br></br>
                <br></br>
                <button type="button" onClick={() => dispatch({ type: 'colorchange' })}>Color</button>
                <br></br>
                <br></br>
                <input type="text" placeholder="Enter text" value={state.textinp} onChange={(e) => dispatch({ type: 'textchange', payload: e.target.value })}></input>
                <br>
                </br>
                <b>{state.textinp}</b>
            </div>
        </>
    )

}

export default Ureducer