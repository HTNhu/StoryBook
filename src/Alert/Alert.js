import React from 'react';
import { Alert } from 'antd'
export default function Task({ type }) {
  return (
    <div className="list-item">
      <Alert type={type} showIcon />
    </div>
  );
}