import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {colorRed, colorBlue, decrement, increment} from './redux/actionCreater';

function App() {

  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter);
  const {color} = useSelector(state => state.color || {color:"green"});

  return (
    <div className="App">
       <button onClick={()=>dispatch(decrement(1))}>-</button>
       <button onClick={()=>dispatch(decrement(2))}>-2</button>
       <button onClick={()=>dispatch(colorRed())}>setRed</button>
       <p style={{color: color,fontWeight:"bold"}}>{count}</p>
       <button onClick={()=>dispatch(increment(1))}>+</button>
       <button onClick={()=>dispatch(increment(2))}>+2</button>
       <button onClick={()=>dispatch(colorBlue())}>setBlue</button>
    </div>
  );
}

export default App;
