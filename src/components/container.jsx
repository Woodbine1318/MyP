import React from 'react';

const Container = ({ children, className }) => (
  <div className={`w-full max-w-screen-xl mx-auto ${className}`}>{children}</div>
);

export default Container;
