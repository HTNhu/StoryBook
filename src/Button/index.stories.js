import React from 'react';
import  { Button }  from 'antd';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
.addDecorator(withKnobs)
  .add('withText', () => <Button onClick={action('clicked')} type="primary" >Hello Button
  </Button>)
  .add('withEmoji', () =>   <Button type="primary" icon="like"></Button>)