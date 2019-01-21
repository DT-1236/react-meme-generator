const INITAL_STATE = { memes: {} };

function rootReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      var { id, ...meme } = action.payload;
      var memes = { ...state.memes };
      memes[id] = meme;
      return { memes };
    case 'DELETE':
      id = action.payload;
      memes = { ...state.memes };
      delete memes[id];
      return { memes };
    default:
      return state;
  }
}

export default rootReducer;
