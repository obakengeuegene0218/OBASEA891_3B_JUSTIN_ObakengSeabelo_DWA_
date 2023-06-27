
// Define constants
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;
// Define action types
const ActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};
// Define action creators
function incrementCounter() {
  return { type: ActionTypes.INCREMENT };
}
function decrementCounter() {
  return { type: ActionTypes.DECREMENT };
}
function resetCounter() {
  return { type: ActionTypes.RESET };
}
// Define reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + STEP_AMOUNT;
    case ActionTypes.DECREMENT:
      return state - STEP_AMOUNT;
    case ActionTypes.RESET:
      return 0;
    default:
      return state;
  }
}
// Create a Redux store
const store = Redux.createStore(counterReducer);
// Update the UI with the initial state
let currentValue = store.getState();
function updateUI() {
  currentValue = store.getState();
  number.value = currentValue.toString();
  if (currentValue <= MIN_NUMBER) {
    subtract.disabled = true;
  } else if (currentValue >= MAX_NUMBER) {
    add.disabled = true;
  } else {
    subtract.disabled = false;
    add.disabled = false;
  }
  console.log(currentValue);
}
// Subscribe to state changes and update the UI
store.subscribe(updateUI);
// Attach event listeners to the buttons
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
subtract.addEventListener("click", () => {
  store.dispatch(decrementCounter());
});
add.addEventListener("click", () => {
  store.dispatch(incrementCounter());
});
const resetButton = document.querySelector("sl-button");
resetButton.addEventListener("click", () => {
  store.dispatch(resetCounter());
  alert("The counter has been reset.");
});
// Initialize the UI
updateUI();