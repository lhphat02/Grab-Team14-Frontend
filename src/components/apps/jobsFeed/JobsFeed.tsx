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

const JobsFeed: React.FC = () => {
  const [jobs, setJobs] = useState<JobListResponse[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  let query = useAppSelector((state) => state.query.query);
  let [totalDocs, setTotalDocs] = useState<number>(0);

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
    console.log('query state in job feed', query);
    dispatch(getJobList(query))
      .unwrap()
      .then((data) => {
        if(data?.totalDocs.value) {
          setTotalDocs(data.totalDocs.value);
        } else {
          setTotalDocs(data.totalDocs);
        }
          console.log('data.docs', data.docs)
        setJobs(data.docs);
      })
      .finally(() => setLoaded(true));
  }, [query]);

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    setLimit(pageSize);
    dispatch(setQuery({ ...query, page: page, limit: pageSize }));
  };

  return (
    <JobsFilter jobs={jobs}>
      {({ jobs }) =>
        jobs?.length ? (
          <BaseJobList next={false} hasMore={false}>
            {jobs.map((job, index) => (
              <BaseJob jobData={job} key={index} />
            ))}
            <Pagination total={totalDocs} itemRender={itemRender} onChange={handlePageChange} />;
          </BaseJobList>
        ) : (
          <BaseEmpty />
        )
      }
    </JobsFilter>
  );
};

export default JobsFeed;
