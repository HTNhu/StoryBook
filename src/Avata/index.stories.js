import React from 'react';
import { Avatar } from 'antd';

export default { title: 'Avatar' };

export const basic = () => <Avatar shape="circle" />

export const withEmoji = () => (
  <Avatar icon="user" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>
)