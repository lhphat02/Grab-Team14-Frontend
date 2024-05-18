import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  ArrowPathRoundedSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import axios from 'axios';
import BaseButton from '../../common/BaseButton';

const CVImport = () => {
  const [cvFile, setCvFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCV = async () => {
      try {
        // Future: Implement API call to fetch user's CV
        // const response = await axios.get('/api/cv');
        // setCvFile(response.data);
      } catch (error) {
        console.error('Error fetching CV:', error);
      }
    };

    fetchCV();
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    file.preview = URL.createObjectURL(file);
    console.log('File accepted:', file);
    // Future: Implement API call to upload CV
    setCvFile(file);
    setIsEditing(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    maxFiles: 1,
  });

  const handleEditToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleCVView = () => {
    window.open(cvFile.preview, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full gap-8 p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-end gap-4">
          <p className="text-xl font-semibold text-prim-1">Your CV:</p>
          {cvFile && (
            <p
              className="text-lg underline rounded-lg cursor-pointer text-prim-1"
              onClick={handleCVView}
            >
              {cvFile.name || 'CV path'}
            </p>
          )}
        </div>
        {cvFile && (
          <BaseButton onClick={handleEditToggle} outline={isEditing}>
            {isEditing ? (
              <>
                <XMarkIcon className="w-6 h-6" />
                <p>Cancel</p>
              </>
            ) : (
              <>
                <ArrowPathRoundedSquareIcon className="w-6 h-6" />
                <p>Change</p>
              </>
            )}
          </BaseButton>
        )}
      </div>

      {isEditing ? (
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center w-full h-40 p-4 border-2 border-dashed ${
            isDragActive ? 'border-prim-1' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">
            {isDragActive
              ? 'Drop your CV here...'
              : 'Drag & drop a PDF file here, or click to select one'}
          </p>
        </div>
      ) : (
        !cvFile && (
          <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center w-full h-full p-4 border-2 border-dashed ${
              isDragActive ? 'border-prim-1' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <p className="mb-2 text-lg font-semibold text-red-500">
                No CV available
              </p>
              <p className="text-gray-500">
                Drag & drop a PDF file here, or click to select one
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CVImport;
