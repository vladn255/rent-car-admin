import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../store/slices/auth-slice/auth-slice'
import ordersSlice from './slices/orders/orders-slice';
import generalSlice from './slices/general/general'

const store = configureStore({
    reducer: {
        auth: authReducer,
        orders: ordersSlice,
        general: generalSlice
    }
})

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch