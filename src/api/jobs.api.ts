// @ts-nocheck
// @ts-ignore
import { newsTags } from 'constants/newsTags';
import { httpApi } from '@app/api/http.api';
import { QueryModel } from '@app/domain/QueryModel';

export interface JobListResponse {
  id: string;
  title: string;
  date: Date;
  company: string;
  companyLink: string;
  companyImageUrl: string;
  location?: string;
  companyLocation?: string;
  experience?: string;
  type?: string;
  workingMode?: string;
  industry?: [string];
  platform: 'Linkedin' | 'Topcv' | 'Indeed' | 'Vietnamworks';
}

export interface JobDetailResponse {
  requirements: any;
  id: string;
  title: string;
  date: Date;
  company: string;
  companyLink: string;
  companyImageUrl: string;
  link;
  location?: string;
  companyLocation?: string;
  experience?: string;
  type?: string;
  workingMode?: string;
  industry?: [string];
  platform: 'Linkedin' | 'Topcv' | 'Indeed' | 'Vietnamworks';
  description: string;
}

export interface HistoryJobListResponse {
  id: string;
  title: string;
  date: Date;
  status: string;
  company: string;
  companyLink: string;
  companyImageUrl: string;
  location?: string;
  companyLocation?: string;
  experience?: string;
  type?: string;
  workingMode?: string;
  industry?: [string];
  platform: 'Linkedin' | 'Topcv' | 'Indeed' | 'Vietnamworks';
  description: string;
}

export interface PaginationResponse {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  docs: JobListResponse[];
}

export const getJobListAPI = async (getJobListReq: QueryModel): Promise<PaginationResponse | undefined> => {
  try {
    const response = await httpApi.get<PaginationResponse>('/job', { params: getJobListReq });
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getJobDetailAPI = async (id: string): Promise<JobDetailResponse | undefined> => {
  try {
    const response = await httpApi.get<JobDetailResponse>(`/job/${id}`);
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getHistoryJobListAPI = async (): Promise<HistoryJobListResponse[] | undefined> => {
  try {
    const response = await httpApi.get<HistoryJobListResponse[]>(`/userJob/history/`);
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
