import useSavedJobList from '../../../hooks/useSavedJobList';
import Loading from '../../common/Loading';
import HistoryJobCard from './HistoryJobCard';
import MOCK from '../../../constants/mockData';

const HistoryJobList = ({ filterStatus }) => {
  const jobList = useSavedJobList({ status: filterStatus });

  if (jobList.isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loading statusMessage="Loading saved jobs..." />
      </div>
    );
  }

  if (jobList.error) {
    return <p>{jobList.error}</p>;
  }

  // const jobListEmpty = jobList.data.length === 0 || !jobList.data;
  const jobListEmpty = false;

  return (
    <div className="flex flex-col w-full h-full max-h-screen gap-2 pr-2 overflow-y-auto md:w-1/2">
      {jobListEmpty ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-semibold text-prim-2">
            No saved jobs found.
          </p>
        </div>
      ) : (
        // jobList.data.map((job) => <HistoryJobCard key={job.id} jobData={job} />)
        MOCK.SAVE_JOBS.map((job) => (
          <HistoryJobCard key={job.id} jobData={job} />
        ))
      )}
    </div>
  );
};

export default HistoryJobList;
