import React from 'react';
import  { Button }  from 'antd';
import { action } from '@storybook/addon-actions';
export default { title: 'Button' };

export const withText = () => 
<div style={{ margin: '0 auto'}}>
  <Button onClick={action('clicked')} type="primary" >Hello Button
  </Button>
</div>

export const withEmoji = () => (
  <Button type="primary" icon="like"></Button>
)