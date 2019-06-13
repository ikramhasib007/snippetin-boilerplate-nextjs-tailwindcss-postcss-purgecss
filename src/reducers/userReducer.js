const userReducerDefaultState = {};

export default(state = userReducerDefaultState, action) => {
  switch(action.type) {
    case 'POST_USER_SUCCESS': {
      return {
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
}