const getScreenWidth = () => {
  if (window.innerWidth <= 768) return 'small';
  return 'big';
};

export default getScreenWidth;
