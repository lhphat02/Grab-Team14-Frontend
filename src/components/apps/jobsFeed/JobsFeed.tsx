// @ts-nocheck
// @ts-ignore
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import JobsFilter from '@app/components/apps/jobsFeed/JobsFilter/JobsFilter';
import { BaseEmpty } from '@app/components/common/BaseEmpty/BaseEmpty';
import { BaseJobList } from '@app/components/common/BaseJobList/BaseJobList';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { QueryRequest, getJobList } from '@app/store/slices/jobSlice';
import { JobListResponse } from '@app/api/jobs.api';
import { BaseJob } from '@app/components/common/BaseJob/BaseJob';
import { QueryModel } from '@app/domain/QueryModel';
import { setQuery } from '@app/store/slices/querySlice';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { Loading } from '../../jobDetail/JobDetail.styles';

const JobsFeed: React.FC = () => {
  const [jobs, setJobs] = useState<JobListResponse[]>([]);
  const [totalDocs, setTotalDocs] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.query.query);

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  useEffect(() => {
    setLoaded(false);

    dispatch(getJobList(query))
      .unwrap()
      .then((data) => {
        setTotalDocs(data.totalDocs);
        setJobs(data.docs);
        // console.log('Get new job list:', data.docs);
      })
      .finally(() => setLoaded(true));
  }, [query, dispatch]);

  const handlePageChange = (page: number, pageSize: number) => {
    dispatch(setQuery({ ...query, page, limit: pageSize }));
  };

  return (
    <JobsFilter jobs={jobs}>
      {({ jobs }) =>
        jobs?.length ? (
          <BaseJobList next={false} hasMore={false}>
            {jobs.map((job, index) => (
              <BaseJob jobData={job} key={index} />
            ))}
            <Pagination total={totalDocs} itemRender={itemRender} onChange={handlePageChange} />
          </BaseJobList>
        ) : (
          <BaseEmpty />
        )
      }
    </JobsFilter>
  );
};

export default JobsFeed;
