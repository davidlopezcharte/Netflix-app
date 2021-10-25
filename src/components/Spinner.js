import React from 'react';

const Spinner = () => {
  const test = 1;
  console.log(test);
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border loader" role="status"></div>
    </div>
  );
};

export default Spinner;
