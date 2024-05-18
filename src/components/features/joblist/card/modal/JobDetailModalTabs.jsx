import { useState } from 'react';

const JobDetailModalTabs = ({ onSelectTab }) => {
  const tabs = [
    { id: 'jobDetails', label: 'Job Details' },
    { id: 'jobMatching', label: 'Job Matching' },
    { id: 'coverLetter', label: 'Cover Letter' },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleSelectTab = (tabId) => {
    setSelectedTab(tabId);
    onSelectTab(tabId);
  };

  return (
    <div className="flex justify-around w-full px-4 md:px-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`md:text-base text-sm font-semibold w-full p-4 transition duration-100 ${
            selectedTab === tab.id
              ? 'text-prim-1 border-b-2 border-prim-1'
              : 'text-gray-600 border-b-2 border-white hover:text-prim-1'
          }`}
          onClick={() => handleSelectTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default JobDetailModalTabs;
