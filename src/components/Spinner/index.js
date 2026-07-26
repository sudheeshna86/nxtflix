import React from 'react';
import './index.css';

export default function Spinner({ size = 48 }) {
  const style = { width: size, height: size };
  return (
    <div className="spinner-wrapper">
      <div className="spinner" style={style} />
    </div>
  );
}
