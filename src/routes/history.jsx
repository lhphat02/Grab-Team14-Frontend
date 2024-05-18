import HistoryJobList from '../components/features/history/HistoryJobList';
import HistoryPageLayout from '../components/layouts/HistoryPageLayout';

const HistoryPage = () => {
  return (
    <HistoryPageLayout>
      <HistoryJobList />
    </HistoryPageLayout>
  );
};

export default HistoryPage;
