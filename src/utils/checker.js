export const isMailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
