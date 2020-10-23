import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

function Parent() {
	let [state, action] = useReducer(CounterReducer, 0)
  	return (
    	<div>
      		<h1>Parent Reducer Counter: {state}</h1>
      		<button onClick={() => action('INCREMENT')}>Parent Reducer Increment</button>
      		<button onClick={() => action('DECREMENT')}>Parent Reducer Decrement</button>
    	</div>
  	);
}

export default Parent;
