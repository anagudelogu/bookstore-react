import { useEffect, useState } from 'react';
import progressPercentage from '../helpers/progressPercentage';

const useProgress = ({ id }) => {
  const randomTotalChapters = () => Math.floor(Math.random() * 10) + 15;

  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [totalChapters, setTotalChapters] = useState(
    randomTotalChapters(),
  );

  const getSavedProgress = () => JSON.parse(localStorage.getItem(id)) || {
    progress,
    currentChapter,
    totalChapters,
  };

  useEffect(() => {
    const savedProgress = getSavedProgress();
    setProgress(savedProgress.progress);
    setCurrentChapter(savedProgress.currentChapter);
    setTotalChapters(savedProgress.totalChapters);
  });

  const updateProgress = () => {
    setCurrentChapter((prev) => prev + 1);
    setProgress(
      progressPercentage(currentChapter + 1, totalChapters),
    );

    const savedProgress = getSavedProgress();
    localStorage.setItem(
      id,
      JSON.stringify({
        ...savedProgress,
        currentChapter: currentChapter + 1,
        progress: progressPercentage(
          currentChapter + 1,
          totalChapters,
        ),
      }),
    );
  };

  return {
    progress,
    currentChapter,
    totalChapters,
    updateProgress,
  };
};

export default useProgress;
