export interface QueryModel {
  page: number;
  limit: number;
  search?: string;
  industry?: string;
  location?: string;
  experience?: string;
  type?: string;
  workingMode?: string;
}
