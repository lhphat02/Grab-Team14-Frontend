// @ts-nocheck 
// @ts-ignore
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import { BaseFeed } from '@app/components/common/BaseFeed/BaseFeed';
import { JobsFilter } from '@app/components/apps/jobsFeed/JobsFilter/JobsFilter';
import { BaseEmpty } from '@app/components/common/BaseEmpty/BaseEmpty';
import { BaseJobList } from '@app/components/common/BaseJobList/BaseJobList';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { QueryRequest, getJobList } from '@app/store/slices/jobSlice';
import { JobListResponse } from '@app/api/jobs.api';
import { BaseJob } from '@app/components/common/BaseJob/BaseJob';
import { QueryModel } from '@app/domain/QueryModel';
import { useSelector } from 'react-redux';
import { setQuery } from '@app/store/slices/querySlice';

export const JobsFeed: React.FC = () => {
  const [jobs, setJobs] = useState<JobListResponse[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  let query = useAppSelector((state) => state.query.query);

  useEffect(() => {
    const queryRequest: QueryRequest = {
      initialQuery: query!,
      nowQuery: null,
    };
    dispatch(getJobList(queryRequest))
      .unwrap()
      .then((data) => {
        if (data?.totalDocs) setHasMore(true);
        else setHasMore(false);
        if (query?.page === 1) setJobs(data?.docs || []);
        else {
          setJobs(jobs.concat(data?.docs || []));
        }
      })
      .finally(() => setLoaded(true));
  }, [query]);

  const next = () => {
    const newQuery: QueryModel = {
      page: page + 1,
      limit: 10,
      isLoaded: true,
      search: null,
      industry: null,
      location: null,
      experience: null,
      type: null,
      time: null,
      workingMode: null,
    };
    setPage(page + 1);
    dispatch(setQuery(newQuery));
  };

  return (
    <JobsFilter jobs={jobs}>
      {({ filteredJobs }) =>
        filteredJobs?.length || !loaded ? (
          <BaseJobList next={next} hasMore={hasMore}>
            {filteredJobs.map((job, index) => (
              <BaseJob
                key={index}
                title={job.title}
                companyImageUrl={job.companyImageUrl}
                companyName={job.companyName}
                companyLocation={job?.companyLocation}
                date={job.date}
                type={job.type}
                industry={job.industry}
                experience={job.experience}
              />
            ))}
          </BaseJobList>
        ) : (
          <BaseEmpty />
        )
      }
    </JobsFilter>
  );
};
