// first we have to create intial state for the count

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('hello');
      console.log(state);
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default countReducer;

//initialState object
//actions
//actions creators
//reducer
//store
//store import main.jsx with provider

// store create karne ke bad kam aate hain

//useDispatch => update the state
//useSelector => use the state
