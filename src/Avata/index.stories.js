import React from 'react';
import { Avatar } from 'antd';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';

storiesOf('Avatar', module)
.addDecorator(withKnobs)
  .add('basic', () => <Avatar shape="circle" />)
  .add('withEmoji', () =>  <Avatar icon="user" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>)
