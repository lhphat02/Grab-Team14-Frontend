import { CogIcon } from '@heroicons/react/24/solid';

import BaseButton from '../../../../common/BaseButton';

const CoverLetterSection = () => {
  const handleGenerateCoverLetter = () => {
    // Future: Implement API call to generate cover letter
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <BaseButton className="w-1/3" onClick={handleGenerateCoverLetter}>
        <CogIcon className="w-6 h-6 " />
        <p className="font-semibold">Generate Cover Letter</p>
      </BaseButton>
    </div>
  );
};

export default CoverLetterSection;
