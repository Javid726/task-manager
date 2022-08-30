import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './login';
import workspaceReducer from './workspace';

export default configureStore({
  reducer: { login: counterReducer, workspace: workspaceReducer },
});
