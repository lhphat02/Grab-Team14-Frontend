import { useState } from 'react';
import BaseSelect from '../components/common/BaseSelect';
import HistoryJobList from '../components/features/history/HistoryJobList';
import HistoryPageLayout from '../components/layouts/HistoryPageLayout';
import MOCK from '../constants/mockData';

const HistoryPage = () => {
  const [statusFilter, setStatusFilter] = useState('');

  const handleChangeStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <HistoryPageLayout>
      <div className="w-full md:w-1/2">
        <BaseSelect
          label="Sort By Status"
          options={MOCK.OPTIONS.JOB_STATUS}
          onChange={handleChangeStatusFilter}
        />
      </div>
      <HistoryJobList filterStatus={statusFilter} />
    </HistoryPageLayout>
  );
};

export default HistoryPage;
