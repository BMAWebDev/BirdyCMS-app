export const getDate = (ISOString: string) => {
  return ISOString.split('T')[0].split('-').reverse().join('.');
};
