import { useState, useEffect } from 'react';
import JobDetailSection from './modal/JobDetailSection';
import JobMatchingSection from './modal/JobMatchingSection';
import CoverLetterSection from './modal/CoverLetterSection';
import BaseModal from '../../../common/BaseModel';
import JobDetailModalTabs from './modal/JobDetailModalTabs';
import JobDetailModalHeader from './modal/JobDetailModalHeader';

const JobDetailModal = ({ isOpen, onClose, jobData }) => {
  const [currentTab, setCurrentTab] = useState('jobDetails');

  useEffect(() => {
    const handleAddToHistory = () => {
      // Future: Implement API call to save job to history
    };

    if (isOpen) {
      handleAddToHistory();
    }
  }, [isOpen]);

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
        <JobDetailModalHeader
          logo={jobData?.companyImageUrl}
          title={jobData?.title}
          companyName={jobData?.companyName}
          companyLink={jobData?.companyLink}
          applyLink={jobData?.applyLink}
          onClose={onClose}
        />
        <JobDetailModalTabs onSelectTab={setCurrentTab} />
        <div className="flex-1 px-4 pb-4 overflow-y-auto transition duration-300">
          {renderSectionContent()}
        </div>
      </div>
    </BaseModal>
  );
};

export default JobDetailModal;
