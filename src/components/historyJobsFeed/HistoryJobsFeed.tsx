// @ts-nocheck 
// @ts-ignore
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { BaseEmpty } from '@app/components/common/BaseEmpty/BaseEmpty';
import { BaseJobList } from '@app/components/common/BaseJobList/BaseJobList';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { getHistoryJobList } from '@app/store/slices/jobSlice';
import { HistoryJobListResponse } from '@app/api/jobs.api';
import { BaseHistoryJob } from '../common/BaseHistoryJob/BaseHistoryJob';
import { HistoryJobsFilter } from './HistoryJobsFilter/HistoryJobsFilter';

export const HistoryJobsFeed: React.FC = () => {
  const [jobs, setJobs] = useState<HistoryJobListResponse>([]);
const dispatch = useAppDispatch();
const [loaded, setLoaded] = useState<boolean>(false);


  useEffect(() => {
    dispatch(getHistoryJobList())
      .unwrap()
      .then((data) => {
        setJobs(data);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <HistoryJobsFilter jobs={jobs}>
      {({ filteredJobs }) =>
        filteredJobs?.length || !loaded ? (
          <BaseJobList >
            {filteredJobs.map((job, index) => (
              <BaseHistoryJob
                job = {job}
              />
            ))}
          </BaseJobList>
        ) : (
          <BaseEmpty />
        )
      }
    </HistoryJobsFilter>
  );
};
