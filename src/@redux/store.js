import { createStore, applyMiddleware } from 'redux' // create the store of all the application
import { persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import { rootReducer } from './reducers'
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)
