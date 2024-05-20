import userReducer from "@app/store/slices/userSlice";
import authReducer from "@app/store/slices/authSlice";
const rootReducer = {
  user: userReducer,
  auth: authReducer,
};

export default rootReducer;
