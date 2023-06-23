// Define the actions
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Define the reducer function
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Define the store
function createStore(reducer) {
  let state = reducer(undefined, {});
  const subscriptions = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscriptions.forEach((subscription) => subscription());
  }

  function subscribe(callback) {
    subscriptions.push(callback);
    return function unsubscribe() {
      const index = subscriptions.indexOf(callback);
      if (index !== -1) {
        subscriptions.splice(index, 1);
      }
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

// Create the store
const store = createStore(reducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Initial state
console.log('Initial state:', store.getState());

// Dispatch actions
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: SUBTRACT });
store.dispatch({ type: RESET });

// Unsubscribe from state changes
unsubscribe();
