import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "meetWeb",
      storage,
      whitelist: ["auth", "user", "meet"]
    },
    reducers
  );

  return persistedReducer;
};
