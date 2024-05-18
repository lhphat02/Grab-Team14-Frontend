export const formatDate = (date, region = 'en-US') => {
  return new Date(date).toLocaleDateString(region, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const shortenText = (text, maxLength = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export const getDayDifference = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  const day = 86400;

  if (diff < day) {
    return 'Today';
  } else if (diff < 2 * day) {
    return '1 day ago';
  } else if (diff < 7 * day) {
    return `${Math.floor(diff / day)} days ago`;
  } else if (diff < 14 * day) {
    return '1 week ago';
  } else if (diff < 21 * day) {
    return '2 weeks ago';
  } else if (diff < 28 * day) {
    return '3 weeks ago';
  } else {
    return `${Math.floor(diff / day / 7)} weeks ago`;
  }
};
