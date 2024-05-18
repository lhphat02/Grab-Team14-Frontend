import JobCard from './card/JobCard';

const JobListContainer = ({ data }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((jobData) => (
        <JobCard key={jobData.id} jobData={jobData} />
      ))}
    </div>
  );
};

export default JobListContainer;
