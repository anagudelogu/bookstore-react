import { useState } from 'react';
import progressPercentage from '../helpers/progressPercentage';

const useProgress = ({ totalChapters }) => {
  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  const updateProgress = () => {
    setCurrentChapter((prev) => prev + 1);
    setProgress(
      progressPercentage(currentChapter + 1, totalChapters),
    );
  };

  return {
    progress,
    currentChapter,
    updateProgress,
  };
};

export default useProgress;
