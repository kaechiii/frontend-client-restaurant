import { configureStore } from '@reduxjs/toolkit';
import { cartApi } from './api/cartApi';
import { couponApi } from './api/couponApi';
import { editApi } from './api/editApi';
import { gameApi } from './api/gameApi';
import { loginApi } from './api/loginApi';
import { menuApi } from './api/menuApi';
import { orderApi } from './api/orderApi';
import { registerApi } from './api/registerApi';
import { userApi } from './api/userApi';
import cartUiSlice from './slices/cartUISlice';
import loginSlice from './slices/loginStatusSlice';

const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [editApi.reducerPath] : editApi.reducer,
    loginState: loginSlice.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [couponApi.reducerPath]: couponApi.reducer,
    cartUiState: cartUiSlice.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [gameApi.reducerPath]: gameApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    .concat(cartApi.middleware).concat(orderApi.middleware).concat(gameApi.middleware)
});

export default store;