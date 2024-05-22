import { useEffect, useState } from 'react';

const QuotesLoader = () => {
  const quotes = [
    'Examing your resume...',
    'Evaluating your skills...',
    'Generating your perfect cover letter...',
    'Looking at your experience...',
    'Just a moment, crafting your cover letter...',
    'Hold on, some magic is happening...',
    'Hang tight, creating your cover letter...',
    'Almost there, finishing up your cover letter...',
    'Ta da! Your cover letter is... wait, hold up...',
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return <span>{quotes[currentQuote]}</span>;
};

export default QuotesLoader;
