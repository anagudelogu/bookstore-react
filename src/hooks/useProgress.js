import { useEffect, useState } from 'react';
import progressPercentage from '../helpers/progressPercentage';

const useProgress = ({ totalChapters, id }) => {
  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(id)) || {
      progress,
      currentChapter,
    };

    setProgress(savedProgress.progress);
    setCurrentChapter(savedProgress.currentChapter);
  });

  const updateProgress = () => {
    setCurrentChapter((prev) => prev + 1);
    setProgress(
      progressPercentage(currentChapter + 1, totalChapters),
    );

    localStorage.setItem(
      id,
      JSON.stringify({
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
    updateProgress,
  };
};

export default useProgress;
