import { useState, useEffect } from 'react';
import JobDetailSection from '../joblist/card/modal/JobDetailSection';
import JobMatchingSection from '../joblist/card/modal/JobMatchingSection';
import CoverLetterSection from '../joblist/card/modal/CoverLetterSection';
import BaseModal from '../../common/BaseModel';
import JobDetailModalTabs from '../joblist/card/modal/JobDetailModalTabs';
import HistoryJobDetailModalHeader from './HistoryJobDetailModalHeader';

const HistoryJobDetailModal = ({ isOpen, onClose, jobData }) => {
  const [currentTab, setCurrentTab] = useState('jobDetails');

  useEffect(() => {
    const handleAddToHistory = () => {
      // Future: Implement API call to save job to history
    };

    if (isOpen) {
      handleAddToHistory();
    }
  }, [isOpen]);

  console.log(jobData);

  const renderSectionContent = () => {
    switch (currentTab) {
      case 'jobDetails':
        return <JobDetailSection jobData={jobData} />;
      case 'jobMatching':
        return <JobMatchingSection jobData={jobData} />;
      case 'coverLetter':
        return <CoverLetterSection />;
      default:
        return null;
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col w-full h-full">
        <HistoryJobDetailModalHeader jobData={jobData} onClose={onClose} />
        <JobDetailModalTabs onSelectTab={setCurrentTab} />
        <div className="flex-1 pb-4 overflow-y-auto transition duration-300 md:px-4">
          {renderSectionContent()}
        </div>
      </div>
    </BaseModal>
  );
};

export default HistoryJobDetailModal;
