import {createStore, combineReducers, applyMiddleware} from 'redux';
import newsReducer from './reducers/newsReducer';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    berita: newsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;