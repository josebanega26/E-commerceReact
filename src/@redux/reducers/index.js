import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { cartReducer } from './cart.reducer'
import { directoryReducer } from "./diretory.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopReducer from './shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['cart', 'directory', 'shop']
}

const reducer = combineReducers({
    shop: shopReducer,
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
})
export const rootReducer = persistReducer(persistConfig, reducer);