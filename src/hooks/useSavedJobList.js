import { useState, useEffect } from 'react';
import axios from 'axios';

const useSavedJobList = ({ status }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/saved-jobs', {
          params: { status },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [status]);

  return { data, isLoading, error };
};

export default useSavedJobList;
