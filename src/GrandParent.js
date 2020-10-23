import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

function GrandParent() {
	let [state, action] = useReducer(CounterReducer, 0)
  	return (
    	<div>
      		<h1>Grandparent Reducer Counter: {state}</h1>
      		<button onClick={() => action('INCREMENT')}>Grandparent Reducer Increment</button>
      		<button onClick={() => action('DECREMENT')}>Grandparent Reducer Decrement</button>
    	</div>
  	);
}

export default GrandParent;
