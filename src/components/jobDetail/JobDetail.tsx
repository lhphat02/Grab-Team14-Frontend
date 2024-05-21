import { JobDetailResponse } from '@app/api/jobs.api';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getJobDetail } from '@app/store/slices/jobSlice';
import { useEffect, useState } from 'react';
import { Loading } from '../common/Loading/Loading';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './JobDetail.styles';

export interface JobDetailProps {
  id: string;
}

export const JobDetail: React.FC<JobDetailProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [job, setJob] = useState<JobDetailResponse | null>(null);

  useEffect(() => {
    dispatch(getJobDetail(id))
      .unwrap()
      .then((data) => {
        console.log('data', data);
        setJob(data!);
      });
  }, [id]);

  if (!job) {
    return (
      <S.JobDetailContainer>
        <LoadingOutlined />
        <p>Loading job detail...</p>
      </S.JobDetailContainer>
    );
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};
