import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import pwaReducer from '@app/store/slices/pwaSlice';
import queryReducer from '@app/store/slices/querySlice';

export default {
  user: userReducer,
  auth: authReducer,
  query: queryReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
};
