const initialState = {
    currentNews: [], 
    savedNews: [],
}

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_NEWS':
            return{
                ...state, 
                currentNews: action.payload
            }
        case 'SAVE_NEWS':
            return{
                ...state,
                savedNews: [...state.savedNews, action.payload]
            }
    
        default:
            return state;
    }
}

export default newsReducer;