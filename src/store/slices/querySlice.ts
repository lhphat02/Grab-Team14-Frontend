// @ts-nocheck
// @ts-ignore
import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';
import { QueryModel } from '@app/domain/QueryModel';
import { persistQuery } from '@app/services/localStorage.service';

export interface QueryState {
  query: QueryModel | null;
}
const initQuery: QueryModel = {
  page: 1,
  limit: 10,
  isLoaded: false,
};
const initialState: QueryState = {
  query: initQuery,
};

export const setQuery = createAction<PrepareAction<QueryModel>>('user/setUser', (newQuery) => {
  persistQuery(newQuery);
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
      console.log('action', action.payload);
      let temp = action.payload;
      console.log('temp', temp);
      if (!action.payload.isLoaded) {
        state.query = temp;
      } else {
        const page = temp.page;
        temp = state.query!;
        temp.page = page;
        temp.isLoaded = true;
        state.query = temp;
        console.log('state.query', state.query.search, temp.search);
      }
    });
  },
});

export default querySlice.reducer;
