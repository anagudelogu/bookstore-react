import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../features/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.value);

  const handleClick = () => {
    dispatch(checkStatus('Under Construction'));
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
      <div>
        Status:
        {status}
      </div>
    </>
  );
};

export default Categories;
