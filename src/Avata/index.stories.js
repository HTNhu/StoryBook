import React from 'react';
import { Avatar } from 'antd';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs/react';

storiesOf('Avatar', module)
.addDecorator(withKnobs)
  .add('basic', () => <Avatar shape= {select ("Type",{circle: "circle", square: "square"}, "circle" )}/>)
  .add('withIcon', () =>  <Avatar icon="user" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>)
