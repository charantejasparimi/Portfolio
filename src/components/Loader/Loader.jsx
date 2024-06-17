import React from 'react';

const Loader = () => {
  // Simulate a computationally expensive operation
  const generateElements = () => {
    const elements = [];
    for (let i = 0; i < 1000000; i++) {
      elements.push(<div key={i}>Element {i}</div>);
    }
    return elements;
  };

  return (
    <div>
      {generateElements()}
    </div>
  );
};

export default Loader;
