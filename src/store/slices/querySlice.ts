import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';
import { QueryModel } from '@app/domain/QueryModel';

export interface QueryState {
  query: QueryModel | null;
}
const initQuery: QueryModel = {
  page: 1,
  limit: 10,
};
const initialState: QueryState = {
  query: initQuery,
};

export const setQuery = createAction<PrepareAction<QueryModel>>('user/setUser', (newQuery) => {
  return {
    payload: newQuery,
  };
});

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setQuery, (state, action) => {
      console.log('fdsfsdaf', action.payload);

      state.query = action.payload;
    });
  },
});

export default querySlice.reducer;
