const progressPercentage = (currentChapter, totalChapters) => {
  if (currentChapter >= totalChapters) return 100;
  return Math.round((currentChapter / totalChapters) * 100);
};

export default progressPercentage;
