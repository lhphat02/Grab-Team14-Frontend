import { useEffect } from 'react';
import JobCard from './card/JobCard';

const JobListContainer = ({ data, queryData }) => {
  useEffect(() => {
    // Add here: Fetch job data from API
    console.log(queryData);
  }, [queryData]);

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((jobData) => (
        <JobCard key={jobData.id} jobData={jobData} />
      ))}
    </div>
  );
};

export default JobListContainer;
