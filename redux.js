//1. import redux
const redux = require('redux');

const defaultState = {
    count:0
}

const countReducer = (state = defaultState, action) => {
    if(action.type === 'Increment') {
        return {
            count: state.count + 1
        }
    }

    if(action.type === 'Decrement') {
        return {
            count: state.count - 1
        }
    }

    return state;
};

//2. create redux store using createStore function
const store = redux.createStore(countReducer);

//3. subscribe
const countSubscriber = () => {
    let value = store.getState();
    console.log(value);
}

store.subscribe(countSubscriber);

//4.  dispatch action

store.dispatch({ type: 'Increment' });
store.dispatch({ type: 'Increment' });
store.dispatch({ type: 'Increment' });
store.dispatch({ type: 'Increment' });

store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });
