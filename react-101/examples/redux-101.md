# Redux 101

Basic example of how to get data in and out of redux

```javascript
import { createStore } from 'redux';


const incrementCount = ({increaseBy = 1} = {}) => ({
    type: 'ADD',
    increaseBy: increaseBy    
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'MINUS',
    decrementBy: decrementBy
});

const mulitplyCount = ({multiplyBy = 1} = {}) => ({
    type: 'MULTIPLY',
    multiplyBy: multiplyBy
});

const resetCount = ({Payload} = {}) => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count: count
});

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                count: state.count + action.increaseBy
            } 
        case 'MINUS':
            return {
                count: state.count - action.decrementBy
            }
        case 'MULTIPLY':
            return {
                count: state.count + action.multiplyBy
            }
         case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
    }

    return state;
};
```

You can talk to the store, by:

```javascript
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(mulitplyCount({multiplyBy: 5}));
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(resetCount());
store.dispatch(setCount({count:101}));
unsubscribe(); 
store.dispatch(mulitplyCount());
```