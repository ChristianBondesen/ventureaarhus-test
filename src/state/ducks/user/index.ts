import * as reducer from './reducers';

export { default as userActions } from './actions';
export { default as userOperations } from './operations';

export default {
  reducer,
};

// Combine all reducers for user into one.
// Import all actions and operations for your reducer here
