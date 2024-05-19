import { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import BaseButton from '../../common/BaseButton';

const CoverLetterImport = () => {
  const [coverLetter, setCoverLetter] = useState('123');
  const [originalCoverLetter, setOriginalCoverLetter] = useState('');

  useEffect(() => {
    // Fetch the cover letter from the backend on component mount
    const fetchCoverLetter = async () => {
      try {
        const response = await axios.get('/api/cover-letter'); // Replace with your backend endpoint
        setCoverLetter(response.data.coverLetter);
        setOriginalCoverLetter(response.data.coverLetter);
      } catch (error) {
        console.error('Error fetching cover letter:', error);
      }
    };

    fetchCoverLetter();
  }, []);

  const handleChange = (event) => {
    setCoverLetter(event.target.value);
  };

  const handleSave = async () => {
    try {
      // Example: Send the cover letter text to a backend server here
      // Replace with your backend endpoint
      // await axios.post('/api/cover-letter', { coverLetter });
      setOriginalCoverLetter(coverLetter);
      console.log('Cover letter saved:', coverLetter);
    } catch (error) {
      console.error('Error saving cover letter:', error);
    }
  };

  const isModified = coverLetter !== originalCoverLetter;

  return (
    <div className="flex flex-col w-full h-full gap-4 md:gap-8">
      <p className="text-base font-semibold text-center md:text-start md:text-xl text-prim-1">
        Your Cover Letter:
      </p>
      <textarea
        value={coverLetter}
        onChange={handleChange}
        placeholder="Write your cover letter here..."
        className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-prim-1 focus:border-transparent"
        rows={8}
      />
      {isModified && (
        <BaseButton onClick={handleSave}>
          <CheckCircleIcon className="w-6 h-6" />
          <p>Save</p>
        </BaseButton>
      )}
    </div>
  );
};

export default CoverLetterImport;
