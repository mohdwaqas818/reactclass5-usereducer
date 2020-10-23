import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

function Child() {
	let [state, action] = useReducer(CounterReducer, 0)
  	return (
    	<div>
      		<h1>Child Reducer Counter: {state}</h1>
      		<button onClick={() => action('INCREMENT')}>Child Reducer Increment</button>
      		<button onClick={() => action('DECREMENT')}>Child Reducer Decrement</button>
    	</div>
  	);
}

export default Child;
