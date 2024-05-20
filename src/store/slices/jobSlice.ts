import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PaginationResponse, getJobListAPI } from '@app/api/jobs.api';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { setQuery } from './querySlice';
import { QueryModel } from '@app/domain/QueryModel';

export interface JobSlice {
  page: 1;
  limit: 10;
  search?: string;
  industry?: string;
  location?: string;
  experience?: string;
  type?: string;
  workingMode?: string;
}

const initialState: JobSlice = {
  page: 1,
  limit: 10,
  search: '',
  industry: '',
  location: '',
  experience: '',
  type: '',
  workingMode: '',
};

let initModel: QueryModel = {
  page: 1,
  limit: 10,
};

export interface QueryRequest {
  initialQuery: QueryModel;
  nowQuery: QueryModel | null;
}

export const getJobList = createAsyncThunk('job/getJobList', async (queryRequest: QueryRequest, { dispatch }) => {
  console.log('queryRequest', queryRequest);
  var query: QueryModel;
  query = queryRequest.initialQuery;
  console.log('queryRequest', queryRequest);
  let getJobListReq = queryRequest.nowQuery;

  return getJobListAPI(query!).then((res) => {
    return res;
  });
});
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobList.fulfilled, (state, action) => {});
  },
});

export default jobSlice.reducer;
