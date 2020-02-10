import { createStore, applyMiddleware } from 'redux' // create the store of all the application
import { persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)
